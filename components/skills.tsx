import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React"},
        { name: "CSS"},
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Ruby"},
        { name: "Java"},
        { name: "PostgreSQL"},
        { name: "MySQL"},
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git"},
        { name: "Vercel"},
        { name: "Figma"},
        { name: "Notion"},
      ],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
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
