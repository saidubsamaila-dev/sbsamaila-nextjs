'use client'

import { useState, useEffect } from 'react'
import { nextCohortLabel, currentCohortLabel } from '@/lib/cohort'

/**
 * Renders a cohort start date, computed on the client and refreshed on mount so
 * it stays accurate as days pass — the date "moves forward" on its own without a
 * redeploy. `variant="next"` (default) shows the upcoming cohort; `variant="current"`
 * shows the cohort currently running. To pin the next date, set COHORT_OVERRIDE
 * in lib/cohort.ts.
 */
export default function CohortStartDate({
  className,
  variant = 'next',
}: {
  className?: string
  variant?: 'next' | 'current'
}) {
  const [label, setLabel] = useState(() =>
    variant === 'current' ? currentCohortLabel() : nextCohortLabel()
  )
  useEffect(() => {
    setLabel(variant === 'current' ? currentCohortLabel() : nextCohortLabel())
  }, [variant])
  return (
    <span className={className} suppressHydrationWarning>
      {label}
    </span>
  )
}
