import React from "react"

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Talenty Consulting",
    "alternateName": "Talenty",
    "url": "https://www.talentyconsulting.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.talentyconsulting.in/logo.png",
      "width": 300,
      "height": 60
    },
    "description": "Talenty Consulting is a recruitment and staffing partner helping companies hire trained, job-ready employees through talent sourcing, screening, and consulting support tailored to modern business needs.",
    "telephone": "+91-8431119696",
    "email": "connect@talentyconsulting.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhive Platinum, Church Street",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.6099
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bengaluru"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/talenty-consulting",
      "https://maps.google.com/?cid=talenty-consulting-bengaluru"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8431119696",
      "email": "connect@talentyconsulting.in",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada"]
    },
    "foundingDate": "2024",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 10
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Talenty Consulting",
    "url": "https://www.talentyconsulting.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.talentyconsulting.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema() {
  const services = [
    {
      name: "Trained Employee Placement",
      description: "Access pre-trained professionals ready to contribute from day one. Our candidates undergo rigorous training programs tailored to industry standards.",
      url: "https://www.talentyconsulting.in/trained-employee-placement"
    },
    {
      name: "Recruitment Consulting",
      description: "Strategic guidance on talent acquisition, employer branding, and building effective hiring processes that attract top talent.",
      url: "https://www.talentyconsulting.in/recruitment-consulting-bangalore"
    },
    {
      name: "Talent Screening",
      description: "Comprehensive candidate evaluation including skills assessment, background verification, and cultural fit analysis.",
      url: "https://www.talentyconsulting.in/talent-screening-process"
    },
    {
      name: "Workforce Support",
      description: "Ongoing support for placed employees and employers to ensure smooth onboarding and long-term retention success.",
      url: "https://www.talentyconsulting.in/trained-employee-placement"
    },
    {
      name: "Fast Hiring Solutions",
      description: "Accelerated recruitment processes for urgent hiring needs without compromising on candidate quality or fit.",
      url: "https://www.talentyconsulting.in/recruitment-consulting-bangalore"
    },
    {
      name: "Business Staffing Assistance",
      description: "End-to-end staffing solutions for scaling teams, managing seasonal demands, and building specialized departments.",
      url: "https://www.talentyconsulting.in/it-staffing-bangalore"
    }
  ]

  const schemas = services.map(s => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": s.name,
    "description": s.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Talenty Consulting",
      "url": "https://www.talentyconsulting.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhive Platinum, Church Street",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bengaluru"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "serviceType": "Recruitment and Staffing",
    "url": s.url
  }))

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is recruitment consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recruitment consulting is a strategic partnership where experts guide organizations in talent acquisition, employer branding, and optimization of hiring processes. Talenty Consulting helps businesses structure their staffing workflows to attract and hire the best fits."
        }
      },
      {
        "@type": "Question",
        "name": "How does Talenty's hiring process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process is structured in four quick phases: understanding your specific business needs, sourcing and training candidates to match those criteria, conducting multi-stage screening, and delivering job-ready hires with onboarding support."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Talenty Consulting supports hiring across multiple high-demand domains, including IT & Software, BFSI (Banking, Financial Services, and Insurance), Healthcare, Manufacturing, Retail, Education, and Hospitality."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you fill a role?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For critical or pre-screened staffing requirements, we offer Fast Hiring Solutions that can place candidates in as little as 3 to 10 business days without compromising on quality."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between staffing and consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Staffing focuses on filling immediate open roles with temporary or permanent talent, while recruitment consulting involves strategic layout design, team planning, training solutions, and process optimization for long-term growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide trained employees or only recruitment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both. Our core differentiator is Trained Employee Placement, where we source candidates and train them in specific tech, domain, or operational skills prior to deployment, ensuring day-one productivity."
        }
      },
      {
        "@type": "Question",
        "name": "What screening process do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We execute a rigorous multi-stage vetting process comprising cognitive aptitude tests, technical coding or domain assessments, HR behavioral rounds, and detailed background checks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve companies outside Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, while our primary physical office is located in Bengaluru (Bhive Platinum, Church Street), we provide recruitment consulting and trained employee placement services pan-India."
        }
      },
      {
        "@type": "Question",
        "name": "What roles/levels can you hire for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cater to junior, mid-level, and senior management roles across software engineering, business operations, sales, customer support, and financial analysts."
        }
      },
      {
        "@type": "Question",
        "name": "How much does your service cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is structured based on the service model, candidate level, and volume of hires. Contact our advisory team directly at connect@talentyconsulting.in for a custom proposal."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Talenty different from large job portals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike standard job boards that deliver thousands of unfiltered resumes, Talenty works as an extension of your HR team. We vet, interview, train, and deliver only a shortlist of highly qualified, job-ready candidates."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply book a consultation session on our website contact page, email your requirements to connect@talentyconsulting.in, or call our Church Street office in Bengaluru at +91-8431119696."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ paths }: { paths: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": paths.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.name,
      "item": p.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function PersonSchema() {
  const founders = [
    {
      name: "Rajesh Kumar",
      jobTitle: "Co-Founder & Managing Director",
      worksFor: "Talenty Consulting",
      url: "https://www.talentyconsulting.in/about"
    },
    {
      name: "Anita Deshmukh",
      jobTitle: "Co-Founder & Head of Talent Acquisition",
      worksFor: "Talenty Consulting",
      url: "https://www.talentyconsulting.in/about"
    }
  ]

  const schemas = founders.map(f => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": f.name,
    "jobTitle": f.jobTitle,
    "worksFor": {
      "@type": "Organization",
      "name": f.worksFor,
      "url": "https://www.talentyconsulting.in"
    },
    "url": f.url
  }))

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
