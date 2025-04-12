import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button>Contact Me</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A passionate developer building innovative solutions and bringing ideas to life.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="#projects">
                  <Button>
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline">Get in Touch</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground">Get to know more about my background and experience</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center pt-8">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Working on projects"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a dedicated developer with a passion for creating elegant solutions to complex problems. With a
                  background in [your background], I specialize in building responsive and user-friendly applications.
                </p>
                <p>
                  My journey in tech began [brief story about how you started]. Since then, I've worked on various
                  projects ranging from [types of projects] to [other types of projects].
                </p>
                <p>
                  When I'm not coding, you can find me [your hobbies or interests]. I believe that these diverse
                  interests help me bring a unique perspective to my work.
                </p>
                <div className="pt-4">
                  <Link href="/resume.pdf" target="_blank">
                    <Button variant="outline">
                      Download Resume
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
              <p className="text-muted-foreground">The tools and technologies I work with</p>
            </div>
            <div className="pt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="React" />
                    <SkillBadge name="Next.js" />
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="HTML5" />
                    <SkillBadge name="CSS3" />
                    <SkillBadge name="Tailwind CSS" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Express" />
                    <SkillBadge name="MongoDB" />
                    <SkillBadge name="PostgreSQL" />
                    <SkillBadge name="REST API" />
                    <SkillBadge name="GraphQL" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Git" />
                    <SkillBadge name="GitHub" />
                    <SkillBadge name="Docker" />
                    <SkillBadge name="AWS" />
                    <SkillBadge name="Vercel" />
                    <SkillBadge name="Figma" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted/50 py-16 md:py-24">
          <div className="container space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground">A showcase of my recent work and contributions</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-stack e-commerce solution with payment processing, user authentication, and inventory management."
                tags={["React", "Node.js", "MongoDB", "Stripe"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates and team collaboration features."
                tags={["Next.js", "TypeScript", "Supabase", "Tailwind"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="A weather application that provides real-time forecasts, historical data, and location-based weather alerts."
                tags={["React", "Redux", "Weather API", "Chart.js"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard
                title="Portfolio Website"
                description="A responsive portfolio website built with modern web technologies to showcase projects and skills."
                tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard
                title="Recipe Sharing Platform"
                description="A community-driven recipe sharing platform with user profiles, ratings, and personalized recommendations."
                tags={["React", "Firebase", "Algolia", "Styled Components"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard
                title="Fitness Tracker"
                description="A comprehensive fitness tracking application with workout plans, progress monitoring, and social features."
                tags={["React Native", "GraphQL", "Node.js", "MongoDB"]}
                imageUrl="/placeholder.svg?height=400&width=600"
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
            </div>
            <div className="flex justify-center pt-8">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  View More on GitHub
                  <Github className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss opportunities? Reach out!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground">
                    I'm currently <span className="text-primary font-medium">open to new opportunities</span> and would
                    love to hear about your project or job opening.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
