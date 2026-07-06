"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { EnquiryForm } from "@/components/public/enquiry-form"
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Zap, 
  TrendingUp 
} from "lucide-react"
import Link from "next/link"

const stats = [
  { value: "40%", label: "Faster Sourcing Timeline" },
  { value: "500+", label: "Placements in Bengaluru" },
  { value: "95%", label: "First-Round Acceptance" },
  { value: "92%", label: "Candidate Retention Rate" },
]

export default function RecruitmentConsultingBangalore() {
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
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Bengaluru Recruitment & Staffing Hub</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              Recruitment Consulting & Staffing Agency in{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Bengaluru
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty mb-8"
            >
              Talenty Consulting is your premium recruitment partner in Bengaluru. Located on Church Street, we help startups, SMEs, and enterprises hire trained, job-ready talent across IT, Finance, Retail, and Operations.
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
                Start Hiring in Bengaluru
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/30 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Sourcing Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">Why Partner with Talenty in Bengaluru?</h2>
            <p className="mt-4 text-muted-foreground">We understand the unique dynamics of the Bangalore hiring landscape and provide structured workflows to secure top performers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Market Insights</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our Bengaluru team is active in tech hubs, coworking spaces, and talent communities. We leverage real-time salary benchmarking and candidate demand trends.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pre-Screened Talent</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every candidate is evaluated through cognitive aptitude tests, specialized tech tasks, and in-depth HR interviews, matching your requirements.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Staffing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you need to scale up your tech team with 20 developers or hire a key HR Director, we provide flexible, project-based or permanent solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Office Contact Flow */}
      <section id="contact" className="py-20 border-t border-border/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-bold mb-4">Book a Bengaluru Hiring Audit</h2>
              <p className="text-muted-foreground mb-8">
                Submit your hiring requirement or schedule an appointment to meet our team at Bhive Platinum, Church Street, Bengaluru.
              </p>
              <EnquiryForm buttonLabel="Submit Hiring Requirements" />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border/40 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4">Talenty Bengaluru Office</h3>
                <p className="text-muted-foreground mb-6">
                  Bhive Platinum, Church Street, Bengaluru, Karnataka 560001
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Phone:</span> +91-8431119696
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Email:</span> connect@talentyconsulting.in
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Office Hours:</span> Mon - Sat, 9:00 AM - 6:00 PM
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border/40 bg-white/5 backdrop-blur-xl h-[300px]">
                <iframe 
                  title="Talenty Bengaluru Church Street Office Map" 
                  src="https://www.google.com/maps?q=Bhive%20Platinum%20Church%20Street%20Bengaluru&z=15&output=embed" 
                  className="h-full w-full border-0 pointer-events-none md:pointer-events-auto" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
