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
                    solutions using AWS, Python, and React. Currently working at YASH Technologies, where I've improved
                    system efficiency by up to 40%.
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
                  <h3 className="text-lg font-semibold mb-3 text-white">Achievements</h3>
                  <ul className="text-sm space-y-2 text-white">
                    <li>• Improved booking efficiency by 30% with Cabin Management System</li>
                    <li>• Reduced order processing latency by 35% with microservices</li>
                    <li>• Built RAG-powered document retrieval system</li>
                    <li>• Secured 1st rank in Third and Final year of engineering</li>
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
