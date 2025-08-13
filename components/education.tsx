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
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Education & Certifications</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-700">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-black" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white">{edu.degree}</CardTitle>
                          <p className="text-primary font-semibold">{edu.institution}</p>
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
                    <Card key={index} className="border-primary/50 bg-gray-900 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-white p-3 rounded-lg">
                            <Award className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-white">{cert.name}</CardTitle>
                            <p className="text-gray-300">{cert.issuer}</p>
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
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Academic & Leadership</CardTitle>
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

              <Card className="mt-6 bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Technical Experience</CardTitle>
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
