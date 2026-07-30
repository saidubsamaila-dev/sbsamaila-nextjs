// Cohort schedule: a new cohort starts on the 23rd of every month.
// The site always shows the NEXT upcoming start date and advances
// automatically as days pass — no redeploy needed.
//
// MANUAL OVERRIDE: to pin a specific cohort date, set COHORT_OVERRIDE to an
// ISO date string like '2026-09-23'. Leave it null for automatic rolling.
export const COHORT_OVERRIDE: string | null = null

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// Day of the month each cohort begins.
const COHORT_DAY = 23

/** The next cohort start date on/after `today` (the 23rd, rolling monthly). */
export function getNextCohortDate(today: Date = new Date()): Date {
  if (COHORT_OVERRIDE) {
    const [y, m, d] = COHORT_OVERRIDE.split('-').map(Number)
    return new Date(y, m - 1, d)
  }
  const y = today.getFullYear()
  const m = today.getMonth()
  // On/before the 23rd → this month's cohort; after the 23rd → next month's.
  if (today.getDate() <= COHORT_DAY) return new Date(y, m, COHORT_DAY)
  return new Date(y, m + 1, COHORT_DAY) // JS rolls the year over automatically
}

/** Deterministic 'Month D, YYYY' — safe for SSR/CSR (no locale/timezone drift). */
export function formatCohort(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

/** The next cohort start date, pre-formatted (e.g. "August 23, 2026"). */
export function nextCohortLabel(today: Date = new Date()): string {
  return formatCohort(getNextCohortDate(today))
}
