"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Briefcase, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function Experience() {
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

    const element = document.getElementById('experience')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])
  const experiences = [
    {
      title: "Software Developer",
      company: "YASH Technologies",
      location: "Indore, India",
      period: "August 2024 - Present",
      type: "Full-time",
      achievements: [
        "AWS Certified Developer with 1.7+ years of experience in designing & developing cloud-native applications and enterprise platforms using Python, FastAPI, and React with AWS services",
        "Working on YASH Product(NIA) as Platform supporting enterprise-grade AI agents, deployed securely across client environments.", 
        "Proficient in building scalable solutions using AWS ECS, Lambda, RDS, DynamoDB, API Gateway,Bedrock, and Athena for enterprise-level applications",
        "Experienced in real-time data processing with Kafka, NATS JetStream, OpenSearch, and WebSocket for handling large bundles of messages/day",
        "Strong expertise in developing RAG (Retrieval-Augmented Generation) systems for semantic search and AI-driven solutions",
        "Hands-on experience with databases including MySQL, MongoDB, DynamoDB, and AWS RDS",
        "Skilled in using development tools like Git, GitHub, Postman Code, and cloud deployment on AWS infrastructure",
        "Built RAG-powered document retrieval using vector DB for YASH's internal system, improving search relevance and contextual precision",
        "worked with LLM model and embeddings models to enhance information retrieval and user experience",
        "Worked with agile model of software development methodology"
      ],
      technologies: ["React", "Python", "FastAPI", "SQL", "CI/CD", "Vector DB"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Briefcase className="h-10 w-10 text-blue-400" />
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Card className="border-l-4 border-l-blue-400 bg-gradient-to-br from-blue-900/70 to-purple-900/70 border-blue-500/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent flex items-center gap-2">
                          <Award className="h-5 w-5 text-blue-400" />
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <Badge variant="secondary" className="text-white font-semibold bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300">{exp.type}</Badge>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-200 leading-relaxed flex items-start gap-2">
                          <span className="text-blue-400 mt-1 font-bold">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => {
                        const techGradients: {[key: string]: string} = {
                          "Python": "from-blue-500 to-cyan-500",
                          "React": "from-cyan-500 to-blue-500",
                          "FastAPI": "from-orange-500 to-red-500",
                          "SQL": "from-purple-500 to-pink-500",
                          "CI/CD": "from-green-500 to-emerald-500",
                          "Vector DB": "from-pink-500 to-purple-500",
                          "AWS": "from-orange-400 to-yellow-500",
                          "LangChain": "from-green-500 to-blue-500",
                        };
                        const gradient = techGradients[tech] || "from-purple-500 to-pink-500";
                        return (
                          <Button
                            key={techIndex}
                            size="sm"
                            className={`text-white border-0 bg-gradient-to-r ${gradient} hover:scale-110 transform transition-all duration-300 shadow-md`}
                            type="button"
                          >
                            {tech}
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
