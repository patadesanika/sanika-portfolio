"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2 } from "lucide-react"

export function Projects() {
  const professionalProjects = [
    {
      title: "RAG System for YASH Technologies",
      description:
        "Built an intelligent Retrieval-Augmented Generation system enabling employees to ask questions and retrieve accurate information from company knowledge base using advanced NLP and vector search capabilities.",
      technologies: [
        "Python",
        "LangChain",
        "Milvus VectorDB",
        "OpenAI GPT",
        "FastAPI",
        "Docker",
        "Embeddings",
      ],
      impact: "Reduced employee time to find policy information by 80% and improved knowledge accessibility with instant Q&A capabilities",
      image: "/rag.png",
    },
    {
      title: "Real-Time Stock Data Processing System",
      description:
        "Designed and deployed a scalable AWS-based architecture to process stock data from BSE APIs with real-time delivery and analytics.",
      technologies: [
        "Apache Kafka",
        "AWS IoT Core",
        "Lambda",
        "DynamoDB",
        "WebSocket API",
        "Athena",
        "QuickSight",
        "CI/CD",
      ],
      impact: "Enhanced analytics efficiency with 99% system reliability using dead-letter queues",
      image: "/stock-market-dashboard.png",
    },
    {
      title: "Cabin Booking Management System",
      description:
        "Full-stack solution providing pictorial representation of office cabin layout with seamless booking functionality for employees.",
      technologies: ["React", "Python", "FastAPI", "SQL"],
      impact: "Improved booking efficiency by 30% and enhanced admin oversight",
      image: "/office-cabin-booking.png",
    },
    {
      title: "Real-Time Order Processing System",
      description:
        "Microservice using Python and NATS JetStream to consume and process orders with inventory management and dead-letter queues.",
      technologies: ["Python", "NATS JetStream", "MySQL"],
      impact: "Reduced order processing latency by 35% and improved system reliability",
      image: "/order-processing-dashboard.png",
    },
  ]

  const personalProjects = [
    {
      title: "Advanced Technology in Drones",
      description:
        "Advanced drone control system with uplinking/downlinking communication using Raspberry Pi and APM 2.8 Flight Controller.",
      technologies: ["Python", "IoT", "SQLite", "Raspberry Pi"],
      impact: "Improved drone functionality and reduced control latency by 20%",
      image: "/drone-control-interface.png",
      github: "https://github.com/patadesanika/drone-control",
      demo: "https://drone-demo.example.com"
    },
    {
      title: "CSS Style Sync",
      description:
        "Real-time CSS modification system using WebSocket API for dynamic styling updates with error handling.",
      technologies: ["Python", "React", "WebSocket API", "FastAPI"],
      impact: "Streamlined front-end development workflow, reducing manual CSS updates by 50%",
      image: "/css-editor-live-preview.png",
      github: "https://github.com/patadesanika/css-sync",
      demo: "https://css-sync-demo.example.com"
    },
    {
      title: "Banking Management System",
      description:
        "Comprehensive banking application with account management, beneficiary services, and payment processing (NEFT, RTGS, IMPS).",
      technologies: ["Core Java", "Advanced Java", "SQL Database"],
      impact: "Streamlined banking operations for 100+ test users",
      image: "/banking-interface-transactions.png",
      github: "https://github.com/patadesanika/Banking_Managmnet_System",
      demo: "https://banking-demo.example.com"
    },
  ]

  const ProjectCard = ({ project, showButtons = false }: { project: any; showButtons?: boolean }) => (
    <Card className="h-full bg-gray-900 border-gray-700">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
            <p className="text-gray-300 mb-4">{project.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <Button
                      key={techIndex}
                      size="sm"
                      variant="outline"
                      className="text-white border-gray-600 hover:bg-gray-800"
                      type="button"
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1 text-white">Impact:</h4>
                <p className="text-sm text-gray-300">{project.impact}</p>
              </div>

              {showButtons && (
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-white border-gray-600 hover:bg-gray-800"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-white border-gray-600 hover:bg-gray-800"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Projects</h2>

          {/* Professional Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Professional Projects</h3>
            <div className="grid gap-8">
              {professionalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showButtons={false} />
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Personal Projects</h3>
            <div className="grid gap-8">
              {personalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showButtons={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
