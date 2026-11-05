import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

const stats = [
  { label: 'CGPA', value: '8.3/10' },
  { label: 'Internships', value: '2' },
  { label: 'Projects', value: '3' },
  { label: 'LeetCode', value: '200+' },
  { label: 'GeeksforGeeks', value: '200+' },
]

const skillGroups = [
  {
    title: 'Backend Development',
    items: ['Java', 'Spring Boot', 'Python', 'SQL', 'REST APIs'],
  },
  {
    title: 'Frontend Development',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Technologies & Tools',
    items: ['Docker', 'Redis', 'Apache Kafka', 'PostgreSQL', 'MySQL', 'Git & GitHub', 'Pandas', 'Matplotlib', 'Seaborn', 'Telegraf'],
  },
  {
    title: 'Core Computer Science',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems'],
  },
]

const experience = [
  {
    company: 'National Informatics Centre (NIC)',
    role: 'SDE Intern',
    duration: 'June 2025 – August 2025',
    description: [
      'Built real-time monitoring dashboards and alerts for the DEMS platform, tracking performance metrics, system health, and endpoint availability.',
      'Optimized REST APIs and backend pipelines, reducing response time by 35% and improving dashboard load speed.',
      'Designed scalable monitoring architecture processing 10K+ events per day with automated alerting.',
    ],
    tech: ['React.js', 'Spring Boot', 'Java', 'REST APIs', 'Nginx'],
  },
  {
    company: 'ErnestWell Business Solution',
    role: 'SDE Intern',
    duration: 'January 2025 – April 2025',
    description: [
      'Developed scalable RESTful services using Spring Boot for efficient frontend-backend communication.',
      'Reduced page load latency by 75% through React rendering optimization and Spring Boot caching.',
      'Improved end-to-end response times by refactoring authentication flows, optimizing database queries, and eliminating redundant API calls.',
    ],
    tech: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL', 'Docker'],
  },
]

const projects = [
  {
    title: 'ThrottleX',
    subtitle: 'Adaptive Distributed API Gateway',
    description: [
      'Built an adaptive distributed API Gateway to secure and manage high-volume API traffic.',
      'Engineered adaptive rate limiting using Redis, Lua scripts, and Token Bucket algorithms.',
      'Implemented Circuit Breaker and fallback mechanisms, improving system resilience and resource utilization by 45%.',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'REST APIs', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/bhavatharanigithub/ThrottleX',
  },
  {
    title: 'TraceNova',
    subtitle: 'Distributed Observability Platform',
    description: [
      'Developed a distributed observability platform for real-time microservice log monitoring.',
      'Implemented an asynchronous log ingestion pipeline processing 5K+ logs per minute.',
      'Integrated a bottleneck detection engine to identify slow services automatically, reducing debugging effort by 30%.',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Apache Kafka'],
    githubUrl: 'https://github.com/bhavatharanigithub/Observability-Tool',
  },
  {
    title: 'PingPolicy',
    subtitle: 'Microservices-Based API Contract Monitoring Tool',
    description: [
      'Developed a microservices-based API contract monitoring tool with polling, alerting, and contract registry services.',
      'Engineered a JSON diff engine to detect and prevent silent schema drift across distributed microservices.',
      'Implemented scheduled polling with Redis caching, reducing redundant network calls by 55%.',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'React'],
    githubUrl: 'https://github.com/bhavatharanigithub/PingPolicy',
  },
]

const achievements = [
  { name: 'CodeChef', detail: '3★ (Division 2), Peak Rating 1697' },
  { name: 'GeeksforGeeks', detail: 'Solved 200+ Problems, Overall Score 574+' },
  { name: 'LeetCode', detail: 'Solved 200+ Problems across DSA topics' },
  { name: 'HP LIFE Foundation', detail: 'Completed IT for Business Success certification' },
]

const education = [
  {
    school: 'Rajalakshmi Institute of Technology',
    degree: 'B.Tech – Computer Science and Business Systems',
    duration: 'September 2023 – May 2027',
    note: 'CGPA: 8.3/10',
  },
  {
    school: 'Sri Vijay Vidyalaya Matric Higher Secondary School',
    degree: 'Higher Secondary Education',
    duration: 'June 2022 – April 2023',
    note: 'Percentage: 91%',
  },
]

const profileLinks = {
  github: 'https://github.com/bhavatharanigithub',
  linkedin: 'https://www.linkedin.com/in/bhavatharani-j',
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(formData.subject || 'Portfolio Enquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:bhavatharani.j.1104@gmail.com?subject=${subject}&body=${body}`
    setStatus('Your default mail app has opened with a pre-filled message.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-60" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">
            bhavatharani<span className="text-zinc-300">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a
            href="mailto:bhavatharani.j.1104@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-10 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                Open to Software Engineering Opportunities
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl xl:text-7xl">
                Hi, I&apos;m Bhavatharani J.
              </h1>

              <h2 className="mt-5 text-xl font-medium tracking-[-0.04em] text-zinc-300 sm:text-2xl">
                Building Scalable Systems. Engineering Better Solutions.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
                I&apos;m a Computer Science and Business Systems undergraduate passionate about backend engineering, distributed systems, and building scalable software solutions. I enjoy solving complex problems and developing efficient applications that make a real impact.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200">
                  View My Work
                  <ArrowRight size={16} />
                </a>
                <a href="/Bhavatharani-J-Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10">
                  <Download size={16} />
                  Download Resume
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex items-center gap-4 text-zinc-300">
                <a
                  href={profileLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:text-white"
                >
                  <Code2 size={18} />
                </a>
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:text-white"
                >
                  <BriefcaseBusiness size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="glass-panel overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/80">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  <span className="ml-3 text-[10px] uppercase tracking-[0.28em] text-zinc-400">terminal</span>
                </div>

                <div className="space-y-4 px-5 py-6 font-mono text-sm text-zinc-200">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <TerminalSquare size={16} className="text-zinc-500" />
                    <span>bhavatharani@portfolio:~/system</span>
                  </div>

                  {[
                    '$ backend --status',
                    'services: 7 active',
                    'latency: 42ms avg',
                    'resilience: 99.98%',
                    'queue: 10K+ events/day',
                  ].map((line) => (
                    <div key={line} className="flex items-center gap-3">
                      <span className="text-emerald-400">$</span>
                      <span className="text-zinc-300">{line}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-white/10 bg-white/[0.02] p-4">
                  {[
                    ['APIs', '12+'],
                    ['Uptime', '99.9%'],
                    ['KPI', '35% faster'],
                    ['Scale', 'Distributed'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{label}</div>
                      <div className="mt-2 text-xl font-semibold tracking-tight text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="section-tag">About</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Building reliable systems with clarity and intent.</h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-base leading-8 text-zinc-300 sm:text-lg">
                I&apos;m currently pursuing my B.Tech in Computer Science and Business Systems at Rajalakshmi Institute of Technology. My interests lie in backend development, distributed architectures, API optimization, and building reliable software systems.
              </p>
              <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
                Through internships and personal projects, I&apos;ve gained practical experience developing REST APIs, optimizing application performance, implementing caching strategies, and working with distributed technologies.
              </p>
              <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
                I believe in writing efficient code, understanding systems deeply, and continuously learning new technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">{stat.label}</div>
                  <div className="mt-4 text-2xl font-semibold tracking-tight text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <p className="section-tag">Technical Skills</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Focused on backend systems, APIs, and scalable engineering.</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
                <div className="mb-4 flex items-center gap-3">
                  {group.title.includes('Backend') ? (
                    <Database size={18} className="text-zinc-300" />
                  ) : group.title.includes('Frontend') ? (
                    <Code2 size={18} className="text-zinc-300" />
                  ) : group.title.includes('Technologies') ? (
                    <Sparkles size={18} className="text-zinc-300" />
                  ) : (
                    <Building2 size={18} className="text-zinc-300" />
                  )}
                  <h3 className="text-lg font-medium text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 border-b border-white/10 pb-6">
            <p className="section-tag">Professional Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Hands-on experience building resilient systems.</h2>
          </div>

          <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-white/10">
            {experience.map((item) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-zinc-500 bg-zinc-900 shadow-[0_0_0_4px_rgba(255,255,255,0.03)]" />
                <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.company}</h3>
                      <p className="mt-2 text-base text-zinc-300">
                        {item.role} | {item.duration}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 text-base leading-7 text-zinc-300">
                    {item.description.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-zinc-200" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 border-b border-white/10 pb-6">
            <p className="section-tag">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Building systems that improve performance, reliability, and observability.</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="project-card group rounded-[28px] border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-zinc-400">Project {String(index + 1).padStart(2, '0')}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    {project.title}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{project.title}</h3>
                <p className="mt-3 text-base text-zinc-300">{project.subtitle}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                  {project.description.map((point) => (
                    <li key={point} className="flex gap-3">
                      <ArrowUpRight size={16} className="mt-1 shrink-0 text-zinc-200" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#080808] transition hover:bg-zinc-200"
                  >
                    <Code2 size={16} />
                    View on GitHub
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="beyond-the-code" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 border-b border-white/10 pb-6">
            <p className="section-tag">Beyond the Code</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Problem solving with a constant drive to improve.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {achievements.map((item) => (
              <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200">
                  <Code2 size={18} />
                </div>
                <h3 className="text-xl font-medium text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <div className="mb-10 border-b border-white/10 pb-6">
            <p className="section-tag">Education</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Academic foundation with a systems-first mindset.</h2>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.school} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 text-zinc-200">
                      <GraduationCap size={18} />
                      <span className="text-sm uppercase tracking-[0.18em] text-zinc-400">Education</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.school}</h3>
                    <p className="mt-2 text-base text-zinc-300">{item.degree}</p>
                  </div>
                  <div className="text-sm text-zinc-400">{item.duration}</div>
                </div>
                <p className="mt-4 text-base text-zinc-300">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-tag">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Let&apos;s Build Something Great Together.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
                I&apos;m always interested in exploring exciting engineering opportunities, collaborating on innovative projects, and connecting with people who love building technology.
              </p>

              <div className="mt-8 space-y-4 text-base text-zinc-200">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-zinc-400" />
                  <a href="mailto:bhavatharani.j.1104@gmail.com" className="transition hover:text-white">
                    bhavatharani.j.1104@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 size={18} className="text-zinc-400" />
                  <span>bhavatharanigithub</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-zinc-400" />
                  <span>Chennai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-zinc-400" />
                  <a href="tel:+919976638704" className="transition hover:text-white">9976638704</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/[0.02] p-5 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                    placeholder="Your name"
                  />
                </label>

                <label className="block text-sm text-zinc-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm text-zinc-300">
                Subject
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                  placeholder="Project collaboration"
                />
              </label>

              <label className="mt-5 block text-sm text-zinc-300">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white/30"
                  placeholder="Tell me about your idea or opportunity..."
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200"
                >
                  <Send size={16} />
                  Send Message
                </button>

                <div className="text-sm text-zinc-400">
                  {status || 'Uses your default mail client for delivery.'}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
