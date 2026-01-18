"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 border-blue-500/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-8 min-h-96">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Professional Summary</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Passionate software developer with 1.5+ years of experience in building scalable, cloud-native
                    solutions using AWS, Python, and React.
                  </p>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    I specialize in creating and implementing RESTful APIs, and building
                    event driven applications. along with working on LLM,Langchain and RAG systems. My expertise spans from frontend React development to backend
                    Python services and AWS cloud architecture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-black font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">Full-Stack Development</Badge>
                    <Badge variant="secondary" className="text-black font-semibold bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 transition-all duration-300">Cloud Architecture</Badge>
                    <Badge variant="secondary" className="text-black font-semibold bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 transition-all duration-300">Real-time Systems</Badge>
                    <Badge variant="secondary" className="text-black font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">Event Driven Systems</Badge>
                    <Badge variant="secondary" className="text-black font-semibold bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 transition-all duration-300">RAG System</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Card className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 border-purple-500/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center bg-purple-500/10 p-2 rounded-lg border border-purple-500/20">
                      <span className="text-purple-300 font-medium">Location:</span>
                      <span className="text-white font-semibold">Pune, India</span>
                    </div>
                    <div className="flex justify-between items-center bg-pink-500/10 p-2 rounded-lg border border-pink-500/20">
                      <span className="text-pink-300 font-medium">Experience:</span>
                      <span className="text-white font-semibold">1.5+ Years</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
                      <span className="text-blue-300 font-medium">Education:</span>
                      <span className="text-white font-semibold">B.E. Computer Engineering</span>
                    </div>
                    <div className="flex justify-between items-center bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20">
                      <span className="text-cyan-300 font-medium">Certification:</span>
                      <span className="text-white font-semibold">AWS Developer Associate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-900/60 to-blue-900/60 border-pink-500/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Career Journey</h3>
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />

                    <div className="mb-6 relative">
                      <span className="absolute -left-5 top-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold shadow-lg">2024</span>
                      <div className="ml-6 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/30">
                        <p className="text-indigo-200 font-semibold mb-1">Trainee Programmer — YASH Technologies</p>
                        <p className="text-sm text-indigo-100">Joined as a trainee, worked on Python and React development.</p>
                      </div>
                    </div>

                    <div className="mb-0 relative">
                      <span className="absolute -left-5 top-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-semibold shadow-lg">2025</span>
                      <div className="ml-6 bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                        <p className="text-green-200 font-semibold mb-1">Software Engineer — YASH Technologies</p>
                        <p className="text-sm text-green-100">Promoted to Software Engineer, focusing on development and deployment.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
