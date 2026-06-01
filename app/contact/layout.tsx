import type { Metadata } from "next"

import { BreadcrumbSchema } from "@/components/landing/json-ld"

export const metadata: Metadata = {
  title: "Book a Recruitment Consultation | Talenty Consulting",
  description: "Share your hiring requirements with Talenty Consulting. Get expert recruitment consulting, staffing support, and trained employee solutions. Based in Bengaluru, serving India.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbPaths = [
    { name: "Home", url: "https://www.talentyconsulting.in" },
    { name: "Contact Us", url: "https://www.talentyconsulting.in/contact" }
  ]

  return (
    <>
      <BreadcrumbSchema paths={breadcrumbPaths} />
      {children}
    </>
  )
}
