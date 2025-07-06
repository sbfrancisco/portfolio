import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "paystack",
      description:
        "Billetera virtual que incluye transferencias, ahorros , administración de roles, generación de comprobantes y registro de actividades para mayor control.",
      image: "/paystack.png?height=500&width=500",
      technologies: ["Ruby", "ActiveRecord", "Sinatra", "HTML", "CSS", "SQLite"],
      github: "https://github.com/sbfrancisco/virtual-wallet",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con pronósticos detallados y visualizaciones interactivas.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media App",
      description: "Red social con funcionalidades de posts, comentarios, likes y chat en tiempo real.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Socket.io", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con blog integrado y sistema de contacto.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "#",
    },
    {
      title: "Learning Platform",
      description: "Plataforma de aprendizaje online con cursos, quizzes y seguimiento de progreso.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Express", "MySQL", "JWT"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mis Proyectos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
