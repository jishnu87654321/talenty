"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { EnquiryForm } from "@/components/public/enquiry-form"
import { 
  UserCheck, 
  BookOpen, 
  Settings, 
  ShieldAlert, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Sparkles
} from "lucide-react"

const trainingModules = [
  {
    icon: BookOpen,
    title: "Domain Training",
    desc: "Candidates are upskilled in industry-specific technologies, compliance, and tools (e.g. specialized ERPs, CRM platforms, accounting softwares)."
  },
  {
    icon: Settings,
    title: "Workflow Customization",
    desc: "We align training bootcamps with your custom operational pipelines, workflows, and standard operating procedures (SOPs)."
  },
  {
    icon: Sparkles,
    title: "Soft Skills & Communication",
    desc: "Candidates receive training in professional email writing, client management, presentation skills, and collaborative teamwork."
  }
]

export default function TrainedEmployeePlacement() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <UserCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Pre-Trained Staffing Model</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              Hire Pre-Trained,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Job-Ready Employees
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty mb-8"
            >
              Stop wasting weeks on onboarding and upskilling new hires. Talenty Consulting sources, trains, and vets candidates to match your specific tech stacks and workflows before they step into your office.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sourcing vs Trained Placement Comparison */}
      <section className="py-20 bg-secondary/10 border-y border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-8 border border-border/40 bg-red-500/5">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <ShieldAlert className="w-6 h-6" />
                Traditional Sourcing
              </h3>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">❌ 2-3 weeks wasted on initial domain training</li>
                <li className="flex items-start gap-2">❌ High risk of early-stage candidate turnover</li>
                <li className="flex items-start gap-2">❌ Heavy drain on senior team member mentoring time</li>
                <li className="flex items-start gap-2">❌ Lower initial output and productivity delays</li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-primary/30 bg-primary/5">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Trained Placement (Talenty)
              </h3>
              <ul className="space-y-4 text-foreground text-sm">
                <li className="flex items-start gap-2">✅ Day-one productive output on specific workflows</li>
                <li className="flex items-start gap-2">✅ Custom upskilling based on your tech stack</li>
                <li className="flex items-start gap-2">✅ Rigorous vetting and cognitive assessment pre-applied</li>
                <li className="flex items-start gap-2">✅ 90-day retention and onboarding support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Training Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">Our Sourcing & Training Modules</h2>
            <p className="mt-4 text-muted-foreground">We custom-train candidates before placement to ensure fit and skill alignment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingModules.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Request Pre-Trained Talent</h2>
            <p className="mt-4 text-muted-foreground">Tell us about your technical stacks, tools, and job descriptions, and we will prepare a vetted candidate shortlist.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 border border-border/40">
            <EnquiryForm buttonLabel="Request Trained Staffing" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
