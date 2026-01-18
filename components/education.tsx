import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Savitribai Phule, Pune University",
      year: "2024",
      percentage: "94.00%",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Autonomous Institute of Pune (GPP)",
      year: "2021",
      percentage: "91.60%",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Maharashtra State Board",
      year: "2018",
      percentage: "87.20%",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Developer – Associate (DVA-C02)",
      issuer: "Amazon Web Services",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const achievements = [
    "Secured 1st rank in Third Year of engineering",
    "Secured 1st rank in Final Year of engineering",
    "Secured 3rd rank in Second Year of engineering",
    "Participated in national level project exhibition at GMRT",
    "President of Drone related project in PVPIT college",
    "Head of committee to organize seminars in college",
    "Training and placement coordinator of PVPIT college",
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education & Certifications</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 border-blue-500/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{edu.degree}</CardTitle>
                          <p className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">{edu.institution}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center text-sm text-gray-400">
                              <Calendar className="mr-1 h-4 w-4" />
                              {edu.year}
                            </div>
                            <Badge variant="secondary" className="text-black font-semibold">{edu.percentage}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="border-purple-500/30 bg-gradient-to-br from-purple-900/60 to-pink-900/60">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-lg">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{cert.name}</CardTitle>
                            <p className="text-purple-200">{cert.issuer}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Achievements</h3>
              <Card className="bg-gradient-to-br from-pink-900/60 to-blue-900/60 border-pink-500/30">
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Academic & Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-white flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-gradient-to-br from-cyan-900/60 to-purple-900/60 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technical Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-white">
                    <li>• Experience in handling Raspberry PI operating system</li>
                    <li>• Experience in analyzing different types of data sets</li>
                    <li>• Automation script development for system operations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
