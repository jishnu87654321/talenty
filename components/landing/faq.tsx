"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is recruitment consulting and how does it benefit my business?",
    answer: "Recruitment consulting is a strategic service where HR specialists audit, design, and execute tailor-made staffing workflows for your organization. By partnering with Talenty Consulting, you gain expert guidance on workforce planning, competitive positioning, and access to pre-screened talent, reducing average time-to-hire by over 40%."
  },
  {
    question: "How does Talenty's hiring process and candidate screening work?",
    answer: "Our proven four-step process is highly structured: First, we align on your technical and cultural needs. Second, we source candidates and provide targeted training. Third, we run multi-stage screening (aptitude, tech challenges, and HR rounds). Fourth, we deliver vetted candidate shortlists and assist in seamless onboarding."
  },
  {
    question: "What industries and job roles do you recruit for in India?",
    answer: "We support specialized staffing across IT & Software Engineering (Frontend, Backend, Fullstack, Mobile), BFSI (Banking, Financial Services, and Insurance), Healthcare, Manufacturing, Retail, Education, and Hospitality. We recruit for junior, mid-level, and senior leadership positions."
  },
  {
    question: "How quickly can you fill open positions?",
    answer: "Through our Fast Hiring Solutions, we leverage a pre-screened and trained candidate pipeline to fill critical vacancies within 3 to 10 business days. For highly customized roles, we typically deliver a vetted shortlist within 2 weeks."
  },
  {
    question: "What is the difference between staffing services and recruitment consulting?",
    answer: "Staffing services focus primarily on filling immediate, transactional hiring needs with permanent or temporary talent. Recruitment consulting takes a broader approach, providing strategic support, employer brand analysis, talent pipelines, and structured pre-deployment training programs."
  },
  {
    question: "Do you provide trained employees or just standard recruitment?",
    answer: "We provide both, but our specialty is Trained Employee Placement. We identify skill gaps required for your specific workflows, train selected candidates in-house, and deploy them to your team ready to contribute from day one."
  },
  {
    question: "What specific screening methods do you apply to candidates?",
    answer: "Each candidate goes through rigorous evaluations, starting with cognitive aptitude and problem-solving tests, followed by specialized technical skill assessments (coding sandboxes or domain-specific cases), behavioral HR profiling, and exhaustive reference/background checks."
  },
  {
    question: "Do you support client hiring requirements outside of Bengaluru?",
    answer: "Yes. While our headquarters and primary physical office are in Bengaluru (Bhive Platinum, Church Street), we operate as a pan-India partner, sourcing and placing candidates for businesses nationwide, including major hubs like Mumbai, Pune, Delhi NCR, and Hyderabad."
  },
  {
    question: "How much do Talenty Consulting's recruitment and staffing services cost?",
    answer: "Our fees are structured based on the service model selected (contingency, retained, or project-based), candidate experience levels, and hire volumes. We offer flexible, business-friendly terms. Contact us at connect@talentyconsulting.in for a custom proposal."
  },
  {
    question: "What makes Talenty different from large job portals like Naukri or Indeed?",
    answer: "Traditional job portals inundate your inbox with thousands of raw, unvetted resumes. Talenty acts as an active extension of your recruitment team: we source, filter, verify, and train candidates so you only interview the top 5% who are ready for the role."
  },
  {
    question: "What types of counseling or consulting sessions do you offer?",
    answer: "We offer dual-focused consultations: B2B consulting for founders and HR leaders seeking team-scaling structures, and career counseling/placement support for ambitious professionals looking to transition or upskill into high-demand roles."
  },
  {
    question: "How can my company get started with Talenty Consulting?",
    answer: "You can book a briefing session directly on our Contact page, email your open job descriptions to connect@talentyconsulting.in, or call our Church Street office in Bengaluru at +91-8431119696 to speak with a recruitment consultant today."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6"
          >
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Expert Insights:{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hiring & Staffing FAQ
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Everything you need to know about our recruitment consulting, staffing workflows, and trained placement solutions in India.
          </motion.p>
        </div>

        {/* Accordion list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto max-w-4xl rounded-3xl border border-border/40 bg-white/5 p-6 md:p-10 backdrop-blur-xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-item-${index}`}
                className="border-b border-border/30 pb-2 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
