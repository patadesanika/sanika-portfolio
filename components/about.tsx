import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Professional Summary</h3>
                  <p className="text-white mb-4">
                    Passionate software developer with 1+ year of experience in building scalable, cloud-native
                    solutions using AWS, Python, and React.
                  </p>
                  <p className="text-white mb-4">
                    I specialize in creating responsive web applications, implementing RESTful APIs, and building
                    real-time data processing systems. My expertise spans from frontend React development to backend
                    Python services and AWS cloud architecture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-black font-semibold">Full-Stack Development</Badge>
                    <Badge variant="secondary" className="text-black font-semibold">Cloud Architecture</Badge>
                    <Badge variant="secondary" className="text-black font-semibold">Real-time Systems</Badge>
                    <Badge variant="secondary" className="text-black font-semibold">RAG System</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-white">Quick Facts</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white">Pune, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Experience:</span>
                      <span className="text-white">1+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Education:</span>
                      <span className="text-white">B.E. Computer Engineering</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Certification:</span>
                      <span className="text-white">AWS Developer Associate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Career Journey</h3>
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-700" />

                    <div className="mb-6 relative">
                      <span className="absolute -left-5 top-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white text-xs font-semibold">2024</span>
                      <div className="ml-6">
                        <p className="text-white font-medium mb-1">Trainee Programmer — YASH Technologies</p>
                        <p className="text-sm text-gray-400">Joined as a trainee, worked on Python and React development.</p>
                      </div>
                    </div>

                    <div className="mb-0 relative">
                      <span className="absolute -left-5 top-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white text-xs font-semibold">2025</span>
                      <div className="ml-6">
                        <p className="text-white font-medium mb-1">Software Engineer — YASH Technologies</p>
                        <p className="text-sm text-gray-400">Promoted to Software Engineer, focusing on development and deployment.</p>
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
