import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Hire Trained Employees in India: The Complete Guide (2026)",
  description: "Learn how B2B companies hire trained employees in India. Sourcing, upskilling, and deploying job-ready talent fast in technology and business roles.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/blog/how-to-hire-trained-employees-india",
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
