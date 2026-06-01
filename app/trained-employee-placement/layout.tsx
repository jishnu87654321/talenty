import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trained Employee Placement Services | Talenty Consulting",
  description: "Hire pre-trained, job-ready employees tailored to your workflows. Talenty Consulting minimizes onboarding and upskilling delays with vetted staff solutions.",
  alternates: {
    canonical: "https://www.talentyconsulting.in/trained-employee-placement",
  },
}

export default function TrainedPlacementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
