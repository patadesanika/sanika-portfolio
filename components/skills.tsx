import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const technologies = [
    "React",
    "Python",
    "AWS",
    "FastAPI",
    "Java",
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
    "Spring Boot",
    "NATS JetStream",
    "OpenSearch",
    "CI/CD Pipeline",
    "HTML/CSS",
    "JavaScript",
    "RESTful APIs",
    "Serverless",
    "Vector DB",
    "QuickSight",
    "Athena",
    "SQLite",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Technologies & Tools</h2>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-center text-white">Technical Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-4 py-2 text-black font-semibold">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
