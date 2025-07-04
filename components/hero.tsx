"use client"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { scrollToSection, cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary">Francisco Natale</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Desarrollador fullstack en formación
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Apasionado por el desarrollo web y con ganas de crecer en el mundo del software. Actualmente en proceso de aprendizaje y formación, 
          enfocado en adquirir experiencia práctica y dominar nuevas tecnologías para crear proyectos de calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            
            <Button onClick={() => scrollToSection("contacto")} size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contáctame
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
