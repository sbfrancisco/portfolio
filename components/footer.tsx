import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-media";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
        <SocialLinks />

          <p className="text-muted-foreground mb-4">Francisco Natale</p>

        </div>
      </div>
    </footer>
  )
}
