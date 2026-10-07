const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

const highlights = [
  'Manual and automation testing for web, API, and mobile platforms',
  'Functional, regression, integration, end-to-end testing, SIT, UAT, and PTR',
  'Proficient with Playwright, Selenium, Appium, Postman, JavaScript, Java, and Python'
];

const metrics = [
  { value: '3+', label: 'Years of Experience' },
  { value: '3', label: 'Testing Platforms: Web, API & Mobile' },
  { value: '7', label: 'Professional Certifications' }
];

const experiences = [
  {
    period: 'Jun 2025 - Present',
    company: 'PT Usaha Kreatif Indonesia',
    role: 'Quality Assurance Engineer',
    location: 'North Jakarta, DKI Jakarta',
    bullets: [
      'Developed comprehensive test cases, test data, and testing documentation based on business and functional requirements.',
      'Performed manual and automated testing for Payment & Settlement (Payment Gateway) web applications using Playwright, JavaScript, and Selenium Library, covering functional, API, end-to-end, and regression testing.',
      'Conducted manual API and UI testing for AI-powered Digital Marketing applications, validating requests, responses, business logic, data processing, and error handling.',
      'Tested Human Resources applications across Web and Mobile, validating HR workflows, user interactions, and cross-platform functionality.',
      'Executed functional, regression, System Integration Testing (SIT), and User Acceptance Testing (UAT) throughout the software development lifecycle.',
      'Identified, reproduced, documented, and tracked defects with detailed reproduction steps and supporting evidence.',
      'Collaborated with Business Analysts, Developers, and cross-functional teams to clarify requirements, investigate defects, and ensure features meet business expectations.'
    ]
  },
  {
    period: 'Jan 2024 - Jun 2025',
    company: 'PT Paramadaksa Teknologi Nusantara',
    role: 'Quality Assurance Engineer',
    location: 'Tangerang, Banten',
    bullets: [
      'Developed comprehensive test cases, test data, and testing documentation based on business requirements.',
      'Performed manual and automated testing for B2B and B2C marketplace applications across Web and Mobile using Java, Appium, and Selenium Library, covering functional, integration, and regression testing.',
      'Conducted API and UI testing for OCR and identity verification systems, validating KTP data extraction and facial similarity matching.',
      'Executed functional, regression, System Integration Testing (SIT), User Acceptance Testing (UAT), and Production Trial Run (PTR) to validate production readiness.',
      'Identified, reproduced, documented, and tracked production and development defects with detailed steps and supporting evidence.',
      'Collaborated with Business Analysts and development teams to review Change Requests (CR) and clarify requirements.',
      'Conducted regression testing after enhancements and bug fixes to verify existing functionality remained stable.'
    ]
  },
  {
    period: 'Jul 2022 - Jun 2023',
    company: 'PT Bank Negara Indonesia Tbk',
    role: 'Internship (Backend Developer)',
    location: 'Central Jakarta, DKI Jakarta',
    bullets: [
      'Developed backend services for internal core service modules within the company.',
      'Built front-end interfaces for internal corporate websites to improve user experience.',
      'Performed SIT on internal web platforms to ensure smooth module interoperability.',
      'Identified and resolved technical bugs to maintain application stability.'
    ]
  }
];

const skills = {
  hard: [
    'Playwright',
    'Selenium',
    'Postman',
    'JavaScript',
    'Python',
    'Java',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Katalon',
    'HTML',
    'CSS',
    'Jira',
    'Figma',
    'Appium',
    'Microsoft Power BI',
    'Microsoft Office',
    'Cypress'
  ],
  soft: [
    'Analytical Thinking',
    'Strategic Communication',
    'Problem Solving',
    'Empathy',
    'Attention to Detail',
    'Adaptability',
    'Continuous Learning'
  ]
};

const education = [
  {
    school: 'Bakrie University',
    degree: 'Bachelor of Information Systems',
    period: 'Sep 2024 - Jul 2026',
    gpa: '3.76/4.00',
    location: 'South Jakarta, DKI Jakarta'
  },
  {
    school: 'Telkom University',
    degree: 'Associate of Information Systems',
    period: 'Aug 2020 - Jul 2023',
    location: 'Bandung, West Java'
  }
];

const certifications = [
  'BNSP Professional Competency Certification - Business Intelligence Analyst (2026)',
  'Cyber Academy - Classical Cryptography for Beginner Course (2025)',
  'Cyber Academy - Introduction to Information Security Course (2025)',
  'Software Quality Assurance Tester - Cypress E2E (UI) Testing (2024)',
  'Software Quality Assurance Tester - Cypress E2E (API) Testing (2024)',
  'Manual API Testing (2024)',
  'Google IT Support Professional Certificate - Coursera (2022)'
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sehat-ari-rezekinta-tinambunan-30173a222/'
  },
  { label: 'GitHub', href: 'https://github.com/sehatarirezekinta17' },
  { label: 'Email', href: 'mailto:sehatarirezekinta@gmail.com' }
];

const featuredProjects = [
  {
    name: 'portofolio_qa',
    summary: 'Automation with JavaScript for API testing workflows and QA portfolio practice.',
    stack: 'JavaScript',
    href: 'https://github.com/sehatarirezekinta17/portofolio_qa'
  },
  {
    name: 'portofolio_qa_ui',
    summary: 'Automation with JavaScript for UI testing scenarios and front-end quality validation.',
    stack: 'JavaScript',
    href: 'https://github.com/sehatarirezekinta17/portofolio_qa_ui'
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Portfo<span>lio</span>
        </a>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="cta-button small" href="#contact">
          Connect
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="intro">Hello, I am</p>
            <h1>
              Sehat Ari Rezekinta
              <br />
              Tinambunan
            </h1>
            <p className="summary">
              Quality Assurance Engineer with 3+ years of experience in manual
              and automation testing across Web, API, and Mobile applications.
              Hands-on experience with payment gateway, marketplace, identity
              verification, AI, and human resources applications.
            </p>

            <div className="hero-actions">
              <a className="cta-button" href="mailto:sehatarirezekinta@gmail.com">
                Contact Me
              </a>
              <a className="ghost-button" href="#experience">
                View Experience
              </a>
              <a className="ghost-button" href={`${import.meta.env.BASE_URL}resume-sehat-ari-october-2026.pdf`} download>
                Download Resume
              </a>
            </div>

            <div className="social-row">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card hero-panel">
              <div className="profile-chip">QA Engineer</div>
              <h3>Quality First, User Focused</h3>
              <p>
                Focused on structured testing, reliable documentation, and
                product quality from development to release.
              </p>
              <div className="hero-mini-grid">
                <div>
                  <strong>Location</strong>
                  <span>West Jakarta</span>
                </div>
                <div>
                  <strong>GitHub</strong>
                  <span>sehatarirezekinta17</span>
                </div>
                <div>
                  <strong>Featured Repos</strong>
                  <span>2 public repositories</span>
                </div>
                <div>
                  <strong>Main Focus</strong>
                  <span>API & UI test automation</span>
                </div>
              </div>
              <a
                className="hero-link"
                href="https://github.com/sehatarirezekinta17"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {metrics.map((item) => (
            <article key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="about-grid" id="about">
          <div className="about-panel">
            <SectionHeading
              eyebrow="About Me"
              title="Building confidence in every release"
              text="I help teams deliver reliable applications through structured manual testing, test automation, and clear defect documentation."
            />
            <p>
              I have a strong track record in building test scenarios,
              validating systems end-to-end, and documenting defects clearly so
              issue resolution can move faster and more effectively.
            </p>
            <p>
              I work closely with Business Analysts and Developers to turn
              business requirements into comprehensive test coverage, from
              functional and API testing to SIT, UAT, and production readiness.
            </p>
          </div>

          <div className="highlight-panel">
            {highlights.map((item) => (
              <div key={item} className="highlight-item">
                <span className="dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <SectionHeading
            eyebrow="Expertise"
            title="Tools, technologies, and core strengths"
            text="A combination of QA hard skills and collaborative soft skills to keep product quality consistent."
          />

          <div className="skills-grid">
            <article className="glass-card">
              <h3>Hard Skills</h3>
              <div className="tag-list">
                {skills.hard.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
            <article className="glass-card">
              <h3>Soft Skills</h3>
              <div className="tag-list">
                {skills.soft.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="experience-intro">
            <SectionHeading
              eyebrow="Projects"
              title="GitHub projects featured in this portfolio"
              text="A selected showcase of public repositories that reflect hands-on work in QA automation and JavaScript-based testing."
            />
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-top">
                  <span className="badge">{project.stack}</span>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Open Repo
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-footer">
                  <span>GitHub Repository</span>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </div>
              </article>
            ))}

            <article className="project-card project-highlight">
              <span className="intro">GitHub Profile</span>
              <h3>Explore more of my testing work</h3>
              <p>
                Browse my GitHub profile to see automation-focused repositories,
                JavaScript testing work, and future portfolio updates.
              </p>
              <a
                className="cta-button"
                href="https://github.com/sehatarirezekinta17"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </article>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-intro">
            <SectionHeading
              eyebrow="Work History"
              title="Relevant and detailed professional experience"
              text="Hands-on quality assurance across payment, marketplace, AI, identity verification, and HR applications, supported by a background in backend development."
            />
          </div>

          <div className="timeline">
            {experiences.map((job) => (
              <article key={`${job.company}-${job.period}`} className="timeline-card">
                <div className="timeline-top">
                  <span className="badge">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education-grid" id="education">
          <article className="glass-card">
            <SectionHeading
              eyebrow="Education"
              title="Academic background"
              text="Supporting both technical foundations and a strong understanding of information systems."
            />
            <div className="stack-list">
              {education.map((item) => (
                <div key={item.school} className="stack-item">
                  <strong>{item.school}</strong>
                  <span>{item.degree}</span>
                  {item.gpa && <span>GPA: {item.gpa}</span>}
                  <small>
                    {item.location} • {item.period}
                  </small>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card">
            <SectionHeading
              eyebrow="Achievements"
              title="Certifications"
              text="Reflecting continuous learning and professional development."
            />
            <div className="stack-list">
              {certifications.map((item) => (
                <div key={item} className="stack-item">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="contact-card" id="contact">
          <div>
            <p className="intro">Contact</p>
            <h2>Ready to contribute to stronger quality assurance initiatives</h2>
            <p>
              Open to collaboration opportunities, QA Engineer roles, and
              projects that require structured and precise system testing.
            </p>
          </div>

          <div className="contact-details">
            <a href="mailto:sehatarirezekinta@gmail.com">sehatarirezekinta@gmail.com</a>
            <a href="tel:+6282164946773">+62 821 6494 6773</a>
            <a href="https://www.linkedin.com/in/sehat-ari-rezekinta-tinambunan-30173a222/" target="_blank" rel="noreferrer">
              LinkedIn · Sehat Ari Rezekinta Tinambunan
            </a>
            <a href="https://github.com/sehatarirezekinta17" target="_blank" rel="noreferrer">
              github.com/sehatarirezekinta17
            </a>
            <span>Grogol Petamburan, West Jakarta, DKI Jakarta</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
