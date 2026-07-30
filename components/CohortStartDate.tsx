'use client'

import { useState, useEffect } from 'react'
import { nextCohortLabel } from '@/lib/cohort'

/**
 * Renders the next cohort start date. Computed on the client and refreshed on
 * mount so it stays accurate as days pass — the date "moves forward" on its own
 * without a redeploy. To pin it manually, set COHORT_OVERRIDE in lib/cohort.ts.
 */
export default function CohortStartDate({ className }: { className?: string }) {
  const [label, setLabel] = useState(() => nextCohortLabel())
  useEffect(() => {
    setLabel(nextCohortLabel())
  }, [])
  return (
    <span className={className} suppressHydrationWarning>
      {label}
    </span>
  )
}
