"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Mail, Code, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <img
                src="/indian-software-developer-headshot.png"
                alt="Sanika Patade"
                className="w-48 h-48 rounded-full mx-auto mb-2 object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                <Code className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 text-black font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
              <Zap className="mr-2 h-4 w-4" />
              AWS Certified Developer Associate
            </Badge>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Sanika Patade</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Passionate Software Developer specializing in <span className="text-blue-400 font-semibold">Python</span>,
              <span className="text-cyan-400 font-semibold"> React</span>, 
              <span className="text-purple-400 font-semibold"> RAG System</span>, and
              <span className="text-pink-400 font-semibold"> AWS Cloud Solutions</span>
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Building scalable, cloud-native solutions with 1.5+ year of experience in full-stack development and real-time
              data processing systems.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-white font-semibold"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/patadesanika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanika-patade-62b602244/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:khushi.patade@gmail.com"
              className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
