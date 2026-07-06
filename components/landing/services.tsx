"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  UserCheck, 
  Search, 
  ClipboardCheck, 
  HeartHandshake, 
  Zap, 
  Building 
} from "lucide-react"

const services = [
  {
    icon: UserCheck,
    title: "Trained Employee Placement",
    description: "Trained employee placement provides companies with pre-vetted, job-ready professionals who have completed industry-standard training. This specialized staffing solution eliminates onboarding delays, ensuring candidates deliver immediate value on day one.",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    icon: Search,
    title: "Recruitment Consulting",
    description: "Recruitment consulting is a strategic service that optimizes employer branding, salary benchmarking, and talent acquisition pipelines. Our consultants analyze hiring friction points, design custom recruitment workflows, and implement best practices.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: ClipboardCheck,
    title: "Talent Screening",
    description: "Talent screening is a rigorous vetting process that evaluates candidate skills, cognitive aptitude, and cultural fit. We implement custom coding tests, background verifications, and professional behavioral interviews to deliver top-tier talent.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: HeartHandshake,
    title: "Workforce Support",
    description: "Workforce support ensures smooth transition and high employee retention through structured onboarding, regular feedback loops, and post-placement counseling. We support both employers and new hires during the critical first 90 days.",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: Zap,
    title: "Fast Hiring Solutions",
    description: "Fast hiring solutions provide accelerated talent sourcing and placement workflows for urgent business vacancies. By leveraging our pre-screened talent pipeline, we deliver vetted profiles within 3 to 10 business days.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Building,
    title: "Business Staffing Assistance",
    description: "Business staffing assistance is a comprehensive, end-to-end service for managing large-scale hiring, seasonal volume spikes, or building entire new departments. We handle job description creation, sourcing, and contracting.",
    gradient: "from-emerald-500 to-teal-600"
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-6 text-balance">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Staffing Solutions
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            From talent sourcing to placement support, we offer a full spectrum of recruitment services designed to meet your unique business needs.
          </p>
        </motion.div>

        {/* Services Grid & Mobile Slider */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000 min-w-[280px] xs:min-w-[320px] max-w-[320px] md:max-w-none md:min-w-0 snap-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/40">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Bottom border glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden justify-center items-center gap-1.5 mt-4">
          {services.map((_, idx) => (
            <div
              key={idx}
              className="w-1.5 h-1.5 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
