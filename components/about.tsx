"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Sparkles, Zap } from "lucide-react"
import ModelViewer from '@/components/model-viewer';

export function About() {
  
  return (
    <section id="sobre-mi" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mí</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div>
              <ModelViewer
  url="/model/base_basic_pbr.glb"
  width={300}
  defaultZoom={2}
  height={300}
  enableHoverRotation={false}
  enableMouseParallax={false}
/>

      </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
              Soy un desarrollador en formación, entusiasta por crear aplicaciones web modernas y funcionales. Me esfuerzo por aprender continuamente y mejorar mis habilidades para aportar soluciones eficientes y escalables.
              He incursionado en tecnologías como Ruby, Java, y bases de datos tanto SQL como
              NoSQL.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
              Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas y resolver problemas complejos de manera creativa. Siempre estoy buscando nuevos desafíos y oportunidades para crecer profesionalmente.
              </p>

              <p className="text-lg text-muted-foreground">
              Cuando no estoy programando, disfruto aprender nuevas tecnologías, me atraen los modelos de inteligencia artificial, la automatización y la creación de proyectos personales que me permitan aplicar lo aprendido.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
          <Card>
      <CardContent className="p-6 text-center">
        <Code className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Desarrollo Backend</h3>
        <p className="text-muted-foreground">
          Experiencia inicial en desarrollo backend con Ruby y bases de datos SQL y NoSQL.
        </p>
      </CardContent>
    </Card>

    <Card>
  <CardContent className="p-6 text-center">
    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">Desarrollo Frontend</h3>
    <p className="text-muted-foreground">
      Aprendiendo a diseñar y construir interfaces web accesibles, responsivas y fáciles de usar.
    </p>
  </CardContent>
</Card>

<Card>
  <CardContent className="p-6 text-center">
    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">Inteligencia Artificial y Automatización</h3>
    <p className="text-muted-foreground">
      Explorando nuevas tecnologías para automatizar procesos y aplicar modelos de inteligencia artificial en proyectos prácticos.
    </p>
  </CardContent>
</Card>
          </div>
        </div>
      </div>
    </section>
  )
}
