import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Talenty Consulting Blog — Sourcing, Training & Staffing Insights",
  description: "Stay ahead of recruitment trends in India. Read expert guides on hiring workflows, pre-trained employee placements, and tech staffing in Bengaluru.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
