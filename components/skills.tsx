"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export function Skills() {
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

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const technologies = [
    "Python",
    "LangChain",
    "AWS",
    "React",
    "FastAPI",
    "Java",
    "milvus vectorDB",
    "Neo4j GraphDB",
    "MySQL",
    "DynamoDB",
    "Apache Kafka",
    "Docker",
    "Git",
    "Lambda",
    "EC2",
    "WebSocket API",
    "Raspberry Pi",
    "IoT",
    "NATS JetStream",
    "OpenSearch",
    "CI/CD Pipeline",
    "HTML/CSS",
    "RESTful APIs",
    "Serverless",
    "Postman",
    "GitHub",
    "OPIK-LLM trace tool",
    "QuickSight",
    "Athena",
    "SQLite",
  ]

  const getRandomGradient = (index: number) => {
    const gradients = [
      "from-blue-400 to-purple-500",
      "from-purple-400 to-pink-500",
      "from-green-400 to-blue-500",
      "from-yellow-400 to-orange-500",
      "from-pink-400 to-red-500",
      "from-indigo-400 to-purple-500",
      "from-cyan-400 to-blue-500",
      "from-teal-400 to-green-500",
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies & Tools</h2>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-center text-white">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className={`text-sm px-4 py-2 text-white font-semibold bg-gradient-to-r ${getRandomGradient(index)} hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl cursor-default`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
