import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Candidate Screening & Talent Vetting Process | Talenty",
  description: "Learn how Talenty Consulting screens candidates. Our rigorous vetting includes cognitive, coding, and behavioral evaluations for high retention staffing.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/talent-screening-process",
  },
}

export default function VettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
