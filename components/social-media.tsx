import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <a href="https://github.com/sbfrancisco" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="h-12 w-12">
          <Github className="h-6 w-6" />
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/1francisco/" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="h-12 w-12">
          <Linkedin className="h-6 w-6" />
        </Button>
      </a>
      <a href="mailto:francisconatale9@gmail.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="h-12 w-12">
          <Mail className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
}