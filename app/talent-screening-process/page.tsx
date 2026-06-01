"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { EnquiryForm } from "@/components/public/enquiry-form"
import { 
  ClipboardCheck, 
  FileCheck, 
  BrainCircuit, 
  Code2, 
  MessageSquareCode, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react"

const stages = [
  {
    icon: FileCheck,
    title: "1. Resume Verification & Sourcing",
    desc: "We screen initial applications against rigorous academic and career indicators. We conduct direct reference checks to verify experience claims."
  },
  {
    icon: BrainCircuit,
    title: "2. Aptitude & Cognitive Testing",
    desc: "Candidates complete cognitive assessments checking logical reasoning, analytical skills, numerical ability, and pattern matching."
  },
  {
    icon: Code2,
    title: "3. Technical & Coding Challenges",
    desc: "For technical roles, candidates write actual code in sandboxed test runs checking code quality, runtime efficiency, and algorithm fluency."
  },
  {
    icon: MessageSquareCode,
    title: "4. Behavioral & Culture-Fit Rounds",
    desc: "Our HR professionals conduct structure-based behavioral interviews checking communication, adaptability, growth mindset, and collaborative skills."
  },
  {
    icon: ClipboardCheck,
    title: "5. Comprehensive Background Check",
    desc: "Prior to onboarding, we verify official identification, educational transcripts, and contact former employers to authenticate track record."
  }
]

export default function TalentScreeningProcess() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-50 animate-float-delayed" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <ClipboardCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Rigorous Candidate Vetting</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              Our Candidate Vetting &{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Screening Process
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty mb-8"
            >
              We believe in total transparency and high standards. Our rigorous five-stage screening process filters the noise so you only interview candidate shortlists who are technical and cultural matches.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vetting Stages */}
      <section className="py-20 bg-secondary/10 border-y border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl p-8 border border-border/40 hover:border-primary/30 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary flex-shrink-0">
                  <stage.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Vetting Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Designed for Team Quality</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                By investing heavily in candidate screening up front, we deliver massive benefits to your internal engineering and operational hiring managers.
              </p>
              <ul className="space-y-4">
                {[
                  "No generic resume matching or keyword padding",
                  "Reduces client interview panel time from 20 hours to 4 hours",
                  "Avoids costly bad-hire deployment decisions",
                  "Maintains higher candidate placement retention rates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-primary/30 bg-primary/5 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
                <Sparkles className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Quality Guarantee</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We back our talent screening with a comprehensive 90-day replacement policy. If any candidate underperforms or leaves during their probation, we replace them at no extra charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Secure Your Custom Screening Setup</h2>
            <p className="mt-4 text-muted-foreground">Speak with our recruitment consultants to align our vetting stages with your internal coding templates and processes.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 border border-border/40">
            <EnquiryForm buttonLabel="Schedule Screening Alignment" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
