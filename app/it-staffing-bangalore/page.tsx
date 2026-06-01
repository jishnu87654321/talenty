"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { EnquiryForm } from "@/components/public/enquiry-form"
import { 
  Code, 
  Terminal, 
  Database, 
  Cloud, 
  Monitor, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const techRoles = [
  {
    icon: Code,
    title: "Frontend Developers",
    techs: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Terminal,
    title: "Backend Engineers",
    techs: ["Node.js", "Python", "Go", "Java", "Spring Boot", "Express"]
  },
  {
    icon: Database,
    title: "Database & Data Engineers",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka"]
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineers",
    techs: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"]
  },
  {
    icon: Monitor,
    title: "Mobile App Developers",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "iOS & Android"]
  },
  {
    icon: Layers,
    title: "Fullstack Engineers",
    techs: ["MERN Stack", "MEAN Stack", "Serverless Architecture", "GraphQL"]
  }
]

export default function ItStaffingBangalore() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-50 animate-float-delayed" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Tech & IT Staffing Hub Bengaluru</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              IT Staffing & Tech{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Recruitment in Bengaluru
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty mb-8"
            >
              Accelerate your engineering scaling with top technical candidates. We source, screen, and place React, Node, Python, and cloud infrastructure specialists for startups and technology companies in Bangalore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity gap-2"
              >
                Hire Developers in Bengaluru
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Roles We Recruit For */}
      <section className="py-20 bg-secondary/10 border-y border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">IT Roles We Cover</h2>
            <p className="mt-4 text-muted-foreground">From standalone developers to complete product engineering squads, we source across the full development stack.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techRoles.map((role, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-border/40 hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <role.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-3">{role.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {role.techs.map((t, idx) => (
                    <span key={idx} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Screening Process Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Rigorous Tech Screening</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  We don't just match keywords on resumes. Every tech profile we deliver goes through deep technical evaluations:
                </p>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">01.</span>
                  <span>Cognitive aptitude and algorithmic problem-solving checks.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">02.</span>
                  <span>Practical programming tests aligned with custom stacks.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary">03.</span>
                  <span>Behavioral interviewing matching startup and enterprise work cultures.</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/talent-screening-process"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                >
                  Learn more about our screening
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-border/40 bg-primary/5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Hiring Benchmarks
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-border/20 pb-2">
                  <span className="text-muted-foreground">Average Time-to-Submit Profile</span>
                  <span className="font-semibold text-foreground">3 - 5 Days</span>
                </div>
                <div className="flex justify-between border-b border-border/20 pb-2">
                  <span className="text-muted-foreground">CV-to-Interview Ratio</span>
                  <span className="font-semibold text-foreground">4:1</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-muted-foreground">Offer Acceptance Rate</span>
                  <span className="font-semibold text-foreground">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="contact" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Request a Developer Shortlist</h2>
            <p className="mt-4 text-muted-foreground">Provide details about your required tech stack and timeline, and our tech recruiters will build your shortlist.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 border border-border/40">
            <EnquiryForm buttonLabel="Request Developer Profiles" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
