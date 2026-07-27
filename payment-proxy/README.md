# Fincra Payment Proxy

A tiny single-purpose service that gives you a **static egress IP** to whitelist
with Fincra, since Vercel's free plan uses dynamic IPs. It holds the Fincra
credentials and makes the outbound "create checkout" call; Vercel forwards to it
over an HMAC-signed channel.

```
Browser → Vercel /api/fincra/checkout (signs) → THIS PROXY [static IP, Fincra key] → Fincra API
Fincra webhook → Vercel /api/fincra/webhook (unchanged, no static IP needed)
```

Cost: **$0/month** on an Oracle Cloud Always Free VM.

---

## 1. Create the free Oracle Cloud VM

1. Sign up at cloud.oracle.com (needs a card for identity verification; it is **not** charged on Always Free).
2. Create a **Compute instance** → shape **VM.Standard.E2.1.Micro** (Always Free, AMD). Image: **Ubuntu 22.04**.
3. Under networking, note the assigned **public IPv4**. Make it permanent: Networking → reserve/assign a **Reserved public IP** so it survives reboots. **This is the IP you whitelist with Fincra.**
4. In the VCN **Security List**, add ingress rules for TCP **80** and **443** from `0.0.0.0/0`. Leave everything else closed.
5. SSH in with the key you set during creation.

## 2. Install runtime + firewall

```bash
# Node 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Caddy (auto-HTTPS)
sudo apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt-get update && sudo apt-get install -y caddy

# Host firewall — only SSH + web. (Ubuntu on Oracle also needs the iptables rule.)
sudo ufw allow OpenSSH && sudo ufw allow 80 && sudo ufw allow 443 && sudo ufw --force enable
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo netfilter-persistent save
```

## 3. Deploy the app

```bash
sudo useradd --system --home /opt/fincra-proxy --shell /usr/sbin/nologin proxy
sudo mkdir -p /opt/fincra-proxy
# copy server.js and package.json into /opt/fincra-proxy (scp/git), then:
cd /opt/fincra-proxy
sudo npm install --omit=dev

# Create the .env from the template and fill in real values
sudo cp .env.example .env
sudo nano .env          # paste Fincra keys; set PROXY_SHARED_SECRET (openssl rand -hex 32)
sudo chown -R proxy:proxy /opt/fincra-proxy
sudo chmod 600 /opt/fincra-proxy/.env
```

## 4. Run it under systemd

```bash
sudo cp fincra-proxy.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now fincra-proxy
sudo systemctl status fincra-proxy        # should be active (running)
curl -s http://127.0.0.1:8080/health      # {"ok":true}
```

## 5. Front it with Caddy (TLS)

1. Add a DNS **A record**: `pay.sbsamailaaccountants.com` → the VM's reserved public IP.
2. Edit the hostname in `Caddyfile`, then:

```bash
sudo cp Caddyfile /etc/caddy/Caddyfile
sudo systemctl reload caddy
curl -s https://pay.sbsamailaaccountants.com/health   # {"ok":true} over HTTPS
```

## 6. Wire up Fincra + Vercel

- **Fincra dashboard** → whitelist the VM's public IP for live API access.
- **Vercel** → Project → Settings → Environment Variables (Production):
  - `PAYMENT_PROXY_URL = https://pay.sbsamailaaccountants.com`
  - `PROXY_SHARED_SECRET = <same value as in the proxy .env>`
  - **Remove** `FINCRA_SECRET_KEY`, `FINCRA_PUBLIC_KEY`, `FINCRA_BUSINESS_ID` from Vercel — they now live only on the VPS.
  - Leave `FINCRA_WEBHOOK_SECRET` on Vercel (the webhook still lands there).
- Redeploy Vercel.

## 7. Verify end-to-end

- Load the `/chamco#enrol` form → the program price should populate (proves the GET → proxy path).
- Submit with `FINCRA_SANDBOX=true` + sandbox keys first → you should be redirected to Fincra's hosted checkout.
- Complete a sandbox payment → confirm the webhook creates an `Enrollment` row on Vercel.
- Flip `FINCRA_SANDBOX=false`, restart the service (`sudo systemctl restart fincra-proxy`), and do one small live test.

## Operating notes

- **Logs:** `journalctl -u fincra-proxy -f`
- **Update code:** replace files, `sudo systemctl restart fincra-proxy`
- **Patching:** `sudo apt update && sudo apt upgrade` monthly; Caddy renews TLS automatically.
- **Rotate** `PROXY_SHARED_SECRET` periodically (update both the VPS `.env` and Vercel, together).
- Keep the app **bound to 127.0.0.1** (it is) so it is reachable only through Caddy.
