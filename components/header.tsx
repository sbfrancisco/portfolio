"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { scrollToSection, cn } from "@/lib/utils"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
<header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
