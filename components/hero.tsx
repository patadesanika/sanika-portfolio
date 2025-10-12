"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/SanikaPatade_SoftwareEngineer_Resume.pdf'
    link.download = 'SanikaPatade_SoftwareEngineer_Resume.pdf'
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/indian-software-developer-headshot.png"
              alt="Sanika Patade"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
            />
          </div>

          <Badge variant="secondary" className="mb-4 text-black font-semibold">
            AWS Certified Developer Associate
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-white">Sanika Patade</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Passionate Software Developer specializing in <span className="text-white font-semibold">React</span>,
            <span className="text-white font-semibold"> Python</span>, and
            <span className="text-white font-semibold"> AWS Cloud Solutions</span>
          </p>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable, cloud-native solutions with 1+ year of experience in full-stack development and real-time
            data processing systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/patadesanika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanika-patade-62b602244/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:khushi.patade@gmail.com"
              className="text-white hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
