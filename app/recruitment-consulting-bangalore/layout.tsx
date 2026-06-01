import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recruitment Consulting & Staffing Agency in Bengaluru | Talenty",
  description: "Talenty Consulting is a premier B2B recruitment consulting and staffing agency in Bengaluru. We connect top companies with pre-vetted, job-ready talent.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/recruitment-consulting-bangalore",
  },
}

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
