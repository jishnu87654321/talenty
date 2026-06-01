"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "How to Hire Trained Employees in India: The Complete Guide (2026)",
    slug: "how-to-hire-trained-employees-india",
    excerpt: "Discover the complete blueprint for hiring, training, and retaining employees in India. Compare traditional staffing vs trained placement models for startups and enterprises.",
    date: "June 01, 2026",
    author: "Anita Deshmukh",
    readTime: "8 min read"
  }
]

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Talenty Blog & Resources</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            >
              Recruitment &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Workforce Insights
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Expert guides, data analysis, and salary benchmarking to help you build high-performance teams.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-3xl p-8 border border-border/40 hover:border-primary/30 transition-all flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      By {post.author}
                    </span>
                    <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {post.excerpt}
                  </p>

                  <div className="pt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
