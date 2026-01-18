"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2 } from "lucide-react"

export function Projects() {
  const professionalProjects = [
    {
      title: "Enterprise License Provisioning System",
      description:
        "Designed and implemented a license system for agents pipeline in Python, integrating organization and plan selection (Starter, Growth, Enterprise) with agent allocation, cloud provider/region configuration, and validity periods.ensure licnese expiry at selected time. Embedded license metadata with agent repositories, applied PyArmor-based obfuscation for secure delivery, and automated client deployment workflows using CI/CD pipelines.",
      technologies: [
        "Python",
        "PyArmor CI license",
        "Cloud Integration",
        "Automation",
        "Security",
        "CI/CD",
        "Deployment",
      ],
      impact: "Streamlined license provisioning process and enhanced security with automated deployment workflows",
      image: "/license.jpg",
    },
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
      demo: "https://www.linkedin.com/posts/sanika-patade-62b602244_dronetechnology-ai-madeinindia-activity-7305094129842053121-v7j2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyaGQMBEaSCLATrgw9ZuLPqKhI_If-4Xj4"
    },
    {
      title: "CSS Style Sync",
      description:
        "Real-time CSS modification system using WebSocket API for dynamic styling updates with error handling.",
      technologies: ["Python", "React", "WebSocket API", "FastAPI"],
      impact: "Streamlined front-end development workflow, reducing manual CSS updates by 50%",
      image: "/css-editor-live-preview.png",
      github: "https://github.com/patadesanika/css-sync"
    },
    {
      title: "Banking Management System",
      description:
        "Comprehensive banking application with account management, beneficiary services, and payment processing (NEFT, RTGS, IMPS).",
      technologies: ["Core Java", "Advanced Java", "SQL Database"],
      impact: "Streamlined banking operations for 100+ test users",
      image: "/banking-interface-transactions.png",
      github: "https://github.com/patadesanika/Banking_Managmnet_System"
    },
  ]

  const ProjectCard = ({ project, showButtons = false }: { project: any; showButtons?: boolean }) => {
    const getTechGradient = (tech: string) => {
      const techGradients: {[key: string]: string} = {
        "Python": "from-blue-500 to-cyan-500",
        "React": "from-cyan-500 to-blue-500",
        "FastAPI": "from-orange-500 to-red-500",
        "AWS": "from-orange-400 to-yellow-500",
        "Docker": "from-blue-600 to-purple-500",
        "SQL": "from-purple-500 to-pink-500",
        "Java": "from-red-500 to-orange-500",
        "LangChain": "from-green-500 to-blue-500",
        "Milvus": "from-pink-500 to-purple-500",
        "OpenAI": "from-green-400 to-emerald-500",
        "Lambda": "from-yellow-500 to-orange-500",
        "Kafka": "from-red-600 to-red-500",
        "NATS": "from-blue-700 to-cyan-500",
      };
      return techGradients[tech] || "from-purple-500 to-pink-500";
    };
    
    return (
    <Card className="h-full bg-gradient-to-br from-blue-900/70 to-purple-900/70 border-blue-500/30">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg border-2 border-purple-400"
          />
        </div>
        <div className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{project.title}</CardTitle>
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
                      className={`text-white border-0 bg-gradient-to-r ${getTechGradient(tech)} hover:scale-110 transform transition-all duration-300 shadow-md`}
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
                    className="text-white border-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-110 transform transition-all duration-300 shadow-md"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="text-white border-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:scale-110 transform transition-all duration-300 shadow-md"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</h2>

          {/* Professional Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Professional Projects</h3>
            <div className="grid gap-8">
              {professionalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showButtons={false} />
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Personal Projects</h3>
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
