import type { Metadata } from "next"

import { PersonSchema, BreadcrumbSchema } from "@/components/landing/json-ld"

export const metadata: Metadata = {
  title: "About Talenty Consulting — Bengaluru's Staffing & Recruitment Partner",
  description: "Learn how Talenty Consulting bridges the gap between exceptional talent and forward-thinking companies. Bengaluru-based recruitment experts serving all industries across India.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbPaths = [
    { name: "Home", url: "https://www.talentyconsulting.in" },
    { name: "About Us", url: "https://www.talentyconsulting.in/about" }
  ]

  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema paths={breadcrumbPaths} />
      {children}
    </>
  )
}
