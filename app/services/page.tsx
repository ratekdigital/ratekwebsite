import Link from "next/link";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Technical Support & Maintenance",
    description: "Keep your technology reliable, secure, and available — with responsive technical expertise when your team needs it.",
    items: [
      "Technical troubleshooting",
      "System maintenance",
      "Infrastructure monitoring",
      "Proactive issue resolution",
      "Ongoing technical support",
    ],
    href: "/services/technical-support",
  },
  {
    number: "02",
    title: "Web & Mobile Development",
    description: "Turn business requirements into reliable digital products, from focused internal tools to customer-facing platforms.",
    items: [
      "Web applications",
      "Mobile applications",
      "APIs and backend systems",
      "System architecture",
      "Product development",
    ],
    href: "/services/software-development",
  },
  {
    number: "03",
    title: "Data Solutions",
    description: "Turn fragmented business data into structured, secure, usable information that supports better decisions.",
    items: [
      "Data architecture",
      "Database systems",
      "Data pipelines",
      "Data management",
      "Business intelligence",
    ],
    href: "/services/data-solutions",
  },
  {
    number: "04",
    title: "Technology & Systems Integration",
    description: "Connect, modernize, and simplify the technology your business depends on — without unnecessary complexity.",
    items: [
      "Cloud tools",
      "Systems integration",
      "Legacy modernization",
      "Workflow automation",
      "Technical consulting",
    ],
    href: "/services/infrastructure",
  },
];

const engagements = [
  ["01", "Ongoing technical support", "A dependable technical partner for the systems your business relies on every day."],
  ["02", "Project-based engineering", "Focused technical delivery when you need to build, replace, integrate, or modernize."],
  ["03", "Technology consulting", "Practical guidance for architecture, systems, technology decisions, and technical roadmaps."],
  ["04", "Extended technical capacity", "Additional engineering and specialist capability without adding a full internal department."],
];

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="services-hero">
        <div className="services-hero-grid" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
        <div className="container services-hero-inner">
          <div className="eyebrow"><span className="eyebrow-mark" /> RATEK SERVICES</div>
          <h1>Technology expertise, where your business needs it.</h1>
          <p>
            Ratek combines technical support, software engineering, data expertise,
            and systems integration under one responsive technology partner.
          </p>
          <div className="services-hero-meta">
            <span>SUPPORT</span><b /> <span>ENGINEERING</span><b /> <span>DATA</span><b /> <span>INFRASTRUCTURE</span>
          </div>
        </div>
      </section>

      <section className="services-intro section-light">
        <div className="container services-intro-grid">
          <div>
            <div className="eyebrow"><span className="eyebrow-mark" /> WHAT WE DO</div>
          </div>
          <div>
            <h2>One technical partner. Multiple ways to move your business forward.</h2>
            <p>
              Technology problems rarely fit neatly into one category. A system needs
              support, then modernization. A new product needs engineering, then reliable
              infrastructure. Data needs structure before it can create value.
            </p>
            <p>
              Ratek brings those capabilities together so your business can get the right
              technical expertise without managing a collection of disconnected vendors.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light" aria-labelledby="capabilities-title">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow"><span className="eyebrow-mark" /> CORE CAPABILITIES</div>
            <div>
              <h2 id="capabilities-title">Built around the technology your business actually depends on.</h2>
              <p>
                From immediate technical needs to longer-term transformation, our capabilities
                cover the critical layers between business operations and technology.
              </p>
            </div>
          </div>

          <div className="services-grid services-grid-page">
            {services.map((service) => (
              <Reveal key={service.number}>
                <ServiceCard {...service} />
                <Link className="service-learn" href={service.href}>
                  Explore capability <span>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-section" aria-labelledby="engagement-title">
        <div className="container engagement-layout">
          <div>
            <div className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> HOW WE ENGAGE</div>
            <h2 id="engagement-title">The right level of technical support for the job.</h2>
            <p>
              Not every business needs the same kind of technology relationship. Ratek can
              support a specific project, provide ongoing operational expertise, or extend
              the capabilities of an existing team.
            </p>
          </div>
          <div className="engagement-list">
            {engagements.map(([number, title, body]) => (
              <Reveal key={number}>
                <article className="engagement-item">
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <i aria-hidden="true">↗</i>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="process-pattern" aria-hidden="true"><span /><span /><span /></div>
        <div className="container">
          <div className="process-heading">
            <div className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> THE RATEK APPROACH</div>
            <h2 id="process-title">Technical work should create momentum, not more complexity.</h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Understand", "We start with the business requirement, the current environment, and the outcome that matters."],
              ["02", "Design", "We shape a practical technical approach around the real constraints — not the latest trend."],
              ["03", "Deliver", "We build, configure, integrate, or support with clear communication and accountable execution."],
              ["04", "Improve", "We stay focused on reliability and continuous improvement after the initial work is complete."],
            ].map(([number, title, body]) => (
              <Reveal key={number}>
                <article className="process-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta" id="contact">
        <div className="container services-cta-inner">
          <div>
            <div className="eyebrow eyebrow-dark">LET'S TALK</div>
            <h2>Have a technology problem to solve?</h2>
            <p>
              Tell us what is happening, what you are trying to build, or where your
              current technology is getting in the way. We will help you find the next step.
            </p>
          </div>
          <div className="services-cta-actions">
            <a className="button button-green" href="mailto:hello@ratekdigital.com">Talk to Ratek <span>↗</span></a>
            <a className="email-link" href="mailto:hello@ratekdigital.com">hello@ratekdigital.com</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <a className="brand brand-footer" href="/" aria-label="Ratek home">
            <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
            <span><strong>RATEK</strong><small>RAPID ACCESS TECHNOLOGY</small></span>
          </a>
          <nav aria-label="Footer navigation">
            <a href="/services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="footer-email" href="mailto:hello@ratekdigital.com">hello@ratekdigital.com</a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Ratek. All rights reserved.</span>
          <span>Technology that keeps your business moving.</span>
        </div>
      </footer>
    </main>
  );
}