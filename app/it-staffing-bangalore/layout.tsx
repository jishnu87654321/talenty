import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IT Staffing & Tech Recruitment Agency in Bengaluru | Talenty",
  description: "Accelerate your tech team scaling. Talenty Consulting provides specialized IT staffing and tech recruitment in Bengaluru for developers, QA, and PMs.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/it-staffing-bangalore",
  },
}

export default function ItStaffingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
