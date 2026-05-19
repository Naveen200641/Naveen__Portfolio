import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import {
  SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiPython, SiCplusplus, SiC, SiHtml5, SiCss, SiGithub, SiBlender, SiCanva,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Navbar } from "@/components/Navbar";
import { Particles } from "@/components/Particles";
import { ScrollProgress } from "@/components/ScrollProgress";
import heroAvatar from "@/assets/hero-avatar.jpg";
import projGuidy from "@/assets/project-guidy.jpg";
import projLearning from "@/assets/project-learning.jpg";
import projResume from "@/assets/project-resume.jpg";

const titles = [
  "Frontend Developer",
  "AI Enthusiast",
  "Software Engineer",
  "Problem Solver",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i % titles.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI(i + 1);
        }
      }
    }, del ? 40 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-neon-cyan font-mono">
      {text}
      <span className="inline-block w-[3px] h-6 bg-neon-cyan ml-1 animate-pulse align-middle" />
    </span>
  );
}

const skills = {
  Languages: [
    { name: "Java", icon: FaJava, level: 85 },
    { name: "Python", icon: SiPython, level: 80 },
    { name: "C", icon: SiC, level: 75 },
    { name: "C++", icon: SiCplusplus, level: 78 },
  ],
  Frontend: [
    { name: "HTML", icon: SiHtml5, level: 95 },
    { name: "CSS", icon: SiCss, level: 90 },
    { name: "JavaScript", icon: SiJavascript, level: 88 },
    { name: "React.js", icon: SiReact, level: 85 },
    { name: "Tailwind", icon: SiTailwindcss, level: 90 },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 80 },
    { name: "Express", icon: SiExpress, level: 78 },
    { name: "MongoDB", icon: SiMongodb, level: 75 },
  ],
  Tools: [
    { name: "GitHub", icon: SiGithub, level: 85 },
    { name: "Canva", icon: SiCanva, level: 90 },
    { name: "Blender", icon: SiBlender, level: 70 },
  ],
};

const projects = [
  {
    title: "Guidy – Tourist Guide",
    desc: "A tourist guide web app helping users explore destinations with an easy-to-use interface.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    img: projGuidy,
  },
  {
    title: "Online Learning Platform",
    desc: "Educational platform providing learning resources and course management for students.",
    tech: ["React.js", "Node.js", "MongoDB"],
    img: projLearning,
  },
  {
    title: "Resume Filter & Ranking System",
    desc: "AI-powered resume screening using NLP, TF-IDF and Cosine Similarity to rank resumes vs job descriptions.",
    tech: ["Python", "NLP", "Machine Learning"],
    img: projResume,
  },
];

const achievements = [
  { year: "2024", title: "National Player in Skating", desc: "Represented at national-level competitions across India." },
  { year: "2022", title: "Two-Time National Champion", desc: "Achieved national championship titles in skating." },
  { year: "2019", title: "Gold — Roller Basketball", desc: "National-level Gold winner in Roller Basketball." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function PortfolioPage() {
  const [showTop, setShowTop] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none -z-10" />
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              Available for opportunities
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm <br />
              <span className="text-gradient">Naveen N</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground min-h-[2rem]">
              <Typewriter />
            </p>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Computer Science Engineering student crafting modern, AI-powered digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-medium text-primary-foreground neon-hover"
                style={{ background: "var(--gradient-primary)" }}
              >
                Hire Me
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="px-6 py-3 rounded-full font-medium glass-strong hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xl text-muted-foreground">
              {[FaGithub, FaLinkedin, FaInstagram, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i} href="#" whileHover={{ y: -4, scale: 1.15 }}
                  className="glass w-11 h-11 rounded-full flex items-center justify-center hover:text-neon-cyan"
                  aria-label="social"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass-strong neon-border p-2">
                <img src={heroAvatar} alt="Naveen N" className="w-full h-full object-cover rounded-full" width={384} height={384} />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dashed border-neon-purple/40"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A bit about me">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="md:col-span-2 glass-strong rounded-2xl p-8">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science Engineering student with a strong interest in software
              development, Artificial Intelligence, front-end engineering, and innovative technologies.
              I enjoy building user-friendly applications and creating modern digital experiences,
              with side interests in graphic design, video editing and AI-powered systems.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I'm also a <span className="text-neon-cyan">national-level skating player</span> and a
              two-time national champion — sport taught me leadership, discipline, teamwork and
              problem-solving I carry into every project.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Info label="Goal" value="Software Engineer · AI + Full-Stack" />
              <Info label="Focus" value="Frontend · AI · Design" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4">
            <Info card label="College" value="SNS College of Engineering" />
            <Info card label="Degree" value="B.E. Computer Science (2023–2027)" />
            <Info card label="CGPA" value="7.76" />
          </motion.div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="Tools & technologies">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div key={group} variants={fadeUp} className="glass-strong rounded-2xl p-6">
              <h3 className="font-mono text-sm text-neon-cyan mb-5">{`// ${group}`}</h3>
              <div className="space-y-4">
                {items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <s.icon className="text-xl text-neon-purple" />
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Work" title="Selected projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-2xl overflow-hidden group neon-hover"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={p.img} alt={p.title} loading="lazy" width={1024} height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full glass font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="text-sm px-4 py-2 rounded-full font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                    Live Demo
                  </a>
                  <a href="#" className="text-sm px-4 py-2 rounded-full font-medium glass hover:bg-white/10 inline-flex items-center gap-2">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" eyebrow="Achievements" title="Milestones & wins">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan" />
          <div className="space-y-10">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className={`relative flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-purple ring-4 ring-background neon-border" />
                <div className="ml-12 md:ml-0 md:w-[45%] glass-strong rounded-2xl p-6 neon-hover">
                  <div className="text-xs font-mono text-neon-cyan">{a.year}</div>
                  <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="glass-strong rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="mt-3 text-muted-foreground">
              Have an idea, opportunity or just want to say hi? Drop a message and I'll get back soon.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p><span className="text-neon-cyan font-mono">email →</span> naveen@example.com</p>
              <p><span className="text-neon-cyan font-mono">location →</span> Tamil Nadu, India</p>
            </div>
            <div className="mt-6 flex gap-3 text-xl">
              {[FaGithub, FaLinkedin, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:text-neon-cyan transition">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            className="glass-strong rounded-2xl p-8 space-y-4"
          >
            <Field label="Name" type="text" required />
            <Field label="Email" type="email" required />
            <div>
              <label className="text-xs font-mono text-muted-foreground">Message</label>
              <textarea
                required rows={5} maxLength={1000}
                className="mt-1.5 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neon-purple resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full font-medium text-primary-foreground neon-hover"
              style={{ background: "var(--gradient-primary)" }}
            >
              {sent ? "Message sent ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Naveen N. All rights reserved.</p>
          <p className="font-mono">Designed & Developed by <span className="text-gradient">Naveen N</span></p>
          <div className="flex gap-3 text-lg">
            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-neon-cyan transition"><Icon /></a>
            ))}
          </div>
        </div>
      </footer>

      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground neon-hover"
          style={{ background: "var(--gradient-primary)" }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-neon-cyan">{`// ${eyebrow}`}</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient">{title}</span>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function Info({ label, value, card }: { label: string; value: string; card?: boolean }) {
  return (
    <div className={card ? "glass-strong rounded-2xl p-5" : "glass rounded-xl p-4"}>
      <p className="text-xs font-mono text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-mono text-muted-foreground">{label}</label>
      <input
        type={type} required={required} maxLength={255}
        className="mt-1.5 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neon-purple"
      />
    </div>
  );
}
