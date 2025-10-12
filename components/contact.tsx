"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send email via API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
      
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-white mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations. Feel
                free to reach out if you'd like to work together!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-white">khushi.patade@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-white">+91 9689091696</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-white">Pune, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/patadesanika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-6 w-6 text-black" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanika-patade-62b602244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-black" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                        Name *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className={`bg-gray-800 border-gray-600 text-white placeholder-gray-400 ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                        Email *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className={`bg-gray-800 border-gray-600 text-white placeholder-gray-400 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      className={`bg-gray-800 border-gray-600 text-white placeholder-gray-400 ${
                        errors.subject ? 'border-red-500' : ''
                      }`}
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or opportunity..." 
                      rows={6} 
                      className={`bg-gray-800 border-gray-600 text-white placeholder-gray-400 ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-900 border border-green-700 text-green-300 px-4 py-3 rounded">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded">
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gray-800 text-white hover:bg-gray-700 font-semibold py-3 text-lg shadow-lg border border-gray-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
