"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Github } from "lucide-react"

export function Internships() {
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
    <section id="internships" className="py-20 bg-gradient-to-br from-green-900/20 via-cyan-900/20 to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Internships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-900/60 to-cyan-900/60 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">{internship.title}</CardTitle>
                  <p className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">{internship.company}</p>
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="mr-1 h-4 w-4" />
                    {internship.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-200">{internship.description}</p>
                    
                    <div className="flex gap-2 pt-2">
                      {internship.githubUrl && (
                        <Button 
                          size="sm" 
                          className="text-white border-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-110 transform transition-all duration-300 shadow-md"
                          onClick={() => window.open(internship.githubUrl, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          {internship.title === "Core Java Developer" ? "FUEL" : "Code Clause"}
                        </Button>
                      )}
                      {internship.oibsipUrl && (
                        <Button 
                          size="sm" 
                          className="text-white border-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:scale-110 transform transition-all duration-300 shadow-md"
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
    </section>
  )
}
