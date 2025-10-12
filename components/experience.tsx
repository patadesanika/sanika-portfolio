"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Github, Code2 } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "YASH Technologies",
      location: "Indore, India",
      period: "August 2024 - Present",
      type: "Full-time",
      achievements: [
        "AWS Certified Developer with 1+ years of experience in designing & developing cloud-native applications and enterprise platforms using Python, FastAPI, and React with AWS services",
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

  const internships = [
    {
      title: "Core Java Developer",
      company: "FUEL",
      period: "Jan 2023 - Feb 2023",
      description: "Developed Java-based applications, focusing on object-oriented programming.",
      githubUrl: "https://github.com/patadesanika/JAVA_Coding",
    },
    {
      title: "Data Science Intern",
      company: "CODE CLAUSE & OASIS INFOBYTE",
      period: "Feb 2023 - Mar 2023",
      description: "Analyzed datasets and built predictive models using Python.",
      githubUrl: "https://github.com/patadesanika/code_clause",
      oibsipUrl: "https://github.com/patadesanika/OIBSIP",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary bg-gray-900 border-gray-700">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <Badge variant="secondary" className="text-black font-semibold">{exp.type}</Badge>
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
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
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
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Internships</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {internships.map((internship, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{internship.title}</CardTitle>
                    <p className="text-primary font-semibold">{internship.company}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="mr-1 h-4 w-4" />
                      {internship.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">{internship.description}</p>
                      
                      <div className="flex gap-2 pt-2">
                        {internship.githubUrl && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-white border-gray-600 hover:bg-gray-800"
                            onClick={() => window.open(internship.githubUrl, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            {internship.title === "Core Java Developer" ? "FUEL" : "Code Clause"}
                          </Button>
                        )}
                        {internship.oibsipUrl && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-white border-gray-600 hover:bg-gray-800"
                            onClick={() => window.open(internship.oibsipUrl, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            OIBSIP
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
