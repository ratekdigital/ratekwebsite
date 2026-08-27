import { Header } from "@/components/Header";
import { HeroNetwork } from "@/components/HeroNetwork";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Technical Support & Maintenance",
    description: "Keep your technology reliable, secure, and available.",
    items: [
      "Technical troubleshooting",
      "System maintenance",
      "Infrastructure monitoring",
      "Proactive issue resolution",
      "Ongoing technical support",
    ],
    href: "#contact",
  },
  {
    number: "02",
    title: "Web & Mobile Development",
    description: "Turn business requirements into reliable digital products.",
    items: [
      "Web applications",
      "Mobile applications",
      "APIs and backend systems",
      "System architecture",
      "Product development",
    ],
    href: "#contact",
  },
  {
    number: "03",
    title: "Data Solutions",
    description:
      "Turn business data into structured, secure, usable information.",
    items: [
      "Data architecture",
      "Database systems",
      "Data pipelines",
      "Data management",
      "Business intelligence",
    ],
    href: "#contact",
  },
  {
    number: "04",
    title: "Technology & Systems Integration",
    description:
      "Connect, modernize, and simplify the technology your business depends on.",
    items: [
      "Cloud tools",
      "Systems integration",
      "Legacy modernization",
      "Workflow automation",
      "Technical consulting",
    ],
    href: "#contact",
  },
];

const values = [
  ["Rapid Response", "Fast access to technical expertise when you need it."],
  [
    "Built to Scale",
    "Systems and software designed around where your business is going.",
  ],
  [
    "End-to-End Expertise",
    "Support, engineering, data, and infrastructure under one technical partner.",
  ],
  [
    "Enterprise-Grade Execution",
    "Serious engineering without unnecessary enterprise overhead.",
  ],
];

const principles = [
  ["Respond", "Get the right technical expertise when problems arise."],
  [
    "Build",
    "Develop reliable technology designed around actual business requirements.",
  ],
  ["Evolve", "Continuously improve systems as the business grows."],
];

const audiences = [
  [
    "Growing Businesses",
    "Reliable technology without the need to build a large internal technical department.",
  ],
  [
    "Established Organizations",
    "Modernize systems, improve operations, or extend existing technical capabilities.",
  ],
  [
    "Technology Teams",
    "Additional engineering capacity, specialized expertise, or ongoing technical support.",
  ],
];

const advantages = [
  [
    "01",
    "Responsive",
    "We prioritize speed and clear communication so technical issues don't become business problems.",
  ],
  ["02", "Pragmatic", "We choose technology based on the problem, not trends."],
  [
    "03",
    "Scalable",
    "We build systems that can evolve with your organization.",
  ],
  [
    "04",
    "Accountable",
    "We take ownership beyond deployment — supporting the systems we help create.",
  ],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-mark" /> RAPID ACCESS TECHNOLOGY
            </div>
            <h1 id="hero-title">
              Technology that keeps your business <em>moving.</em>
            </h1>
            <p className="hero-lead">
              Ratek provides responsive technical support, custom software
              development, data solutions, and technology infrastructure for
              businesses that need reliable technology without unnecessary
              complexity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Talk to Ratek <span>↗</span>
              </a>
              <a className="text-link" href="#services">
                Explore our services <span>→</span>
              </a>
            </div>
            <div className="hero-proof">
              <span>Technical partner</span>
              <span>·</span>
              <span>End-to-end capability</span>
              <span>·</span>
              <span>Built for business</span>
            </div>
          </div>
          <HeroNetwork />
        </div>
      </section>

      <section className="value-strip" aria-label="Ratek value propositions">
        <div className="container value-grid">
          {values.map(([title, body]) => (
            <Reveal key={title}>
              <div className="value-item">
                <span className="value-dot" aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="section section-light"
        aria-labelledby="services-title"
      >
        <div className="container">
          <SectionHeading
            kicker="CAPABILITIES"
            title="Technology expertise across your entire operation."
            body="From keeping core systems dependable to building what comes next, Ratek gives your business access to the technical capability it needs."
            id="services-title"
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="model"
        className="section model-section"
        aria-labelledby="model-title"
      >
        <div className="container model-layout">
          <div className="model-intro">
            <div className="eyebrow eyebrow-dark">THE RATEK MODEL</div>
            <h2 id="model-title">
              Rapid Access isn't just our name. It's our operating model.
            </h2>
            <p>
              Businesses shouldn't have to wait weeks to get technical problems
              addressed or months to find the right engineering expertise. We
              make technical capability easier to access — and easier to keep.
            </p>
          </div>
          <div className="principles">
            {principles.map(([title, body], index) => (
              <Reveal key={title}>
                <div className="principle">
                  <div className="principle-index">0{index + 1}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  {index < principles.length - 1 && (
                    <div className="principle-line" aria-hidden="true" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="section section-light"
        aria-labelledby="serve-title"
      >
        <div className="container">
          <SectionHeading
            kicker="WHO WE SERVE"
            title="Technical capability without the overhead."
            body="Ratek works across the business lifecycle — supporting organizations that need dependable technology today and greater technical capacity tomorrow."
            id="serve-title"
          />
          <div className="audience-grid">
            {audiences.map(([title, body], i) => (
              <Reveal key={title}>
                <article className="audience-card">
                  <span className="card-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section advantage-section"
        aria-labelledby="why-title"
      >
        <div className="container">
          <SectionHeading
            kicker="WHY RATEK"
            title="A technical partner, not just another vendor."
            body="The difference is not just what we build. It's how we show up: responsive, practical, accountable, and focused on outcomes."
            id="why-title"
          />
          <div className="advantage-grid">
            {advantages.map(([number, title, body]) => (
              <Reveal key={number}>
                <article className="advantage">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section" aria-labelledby="cta-title">
        <div className="cta-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="container cta-inner">
          <div>
            <div className="eyebrow eyebrow-dark">READY WHEN YOU ARE</div>
            <h2 id="cta-title">Your technology shouldn't slow you down.</h2>
            <p>
              Whether you need immediate technical support, a new digital
              product, better data infrastructure, or a long-term technology
              partner, Ratek is ready to help.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="button button-green"
              href="mailto:hello@ratekdigital.com"
            >
              Talk to Ratek <span>↗</span>
            </a>
            <a className="email-link" href="mailto:hello@ratekdigital.com">
              hello@ratekdigital.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
