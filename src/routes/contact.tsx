import axios from 'axios'
import {
  CheckCircle,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/ui/form-field'
import { contactFormSchema, useFormValidation } from '@/lib/validation'
// import { env } from '@/env'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const {
    data: formData,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    validateAll,
    reset,
  } = useFormValidation(contactFormSchema, {
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched for validation display
    Object.keys(formData).forEach((field) =>
      setFieldTouched(field as keyof typeof formData),
    )

    if (!validateAll()) {
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL || 'https://api.dherbiequake.com'}/contact`,
        formData,
      )
      setIsSubmitting(false)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden animate-seismic-fade-in">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full animate-multi-ripple"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full animate-multi-ripple delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center px-4"
            animation="fade-up"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              Let's
              <span className="block text-primary">Connect</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12">
              Ready to start your transformation journey? Get in touch and let's
              discuss how we can work together to create positive impact and
              meaningful growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat text-foreground">
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <FormField
                          label="Your Name"
                          required
                          error={touched.name ? errors.name : undefined}
                        >
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFieldValue('name', e.target.value)
                            }
                            onBlur={() => setFieldTouched('name')}
                            placeholder="Enter your full name"
                            className={`bg-white border-gray-200 focus:border-primary h-12 ${
                              touched.name && errors.name
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                            }`}
                          />
                        </FormField>

                        {/* Email Address */}
                        <FormField
                          label="Email Address"
                          required
                          error={touched.email ? errors.email : undefined}
                        >
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFieldValue('email', e.target.value)
                            }
                            onBlur={() => setFieldTouched('email')}
                            placeholder="Enter your email address"
                            className={`bg-white border-gray-200 focus:border-primary h-12 ${
                              touched.email && errors.email
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                            }`}
                          />
                        </FormField>

                        {/* Service Interest */}
                        <FormField
                          label="Service Interest"
                          required
                          error={touched.service ? errors.service : undefined}
                        >
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              setFieldValue('service', value)
                            }
                          >
                            <SelectTrigger
                              className={`bg-white border-gray-200 focus:border-primary h-12 ${
                                touched.service && errors.service
                                  ? 'border-red-500 focus:border-red-500'
                                  : ''
                              }`}
                            >
                              <SelectValue placeholder="Select a service area..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Brand Strategist">
                                Brand Strategist
                              </SelectItem>
                              <SelectItem value="Marketing Consultant">
                                Marketing Consultant
                              </SelectItem>
                              <SelectItem value="Content Marketer">
                                Content Marketer
                              </SelectItem>
                              <SelectItem value="Creative Director">
                                Creative Director
                              </SelectItem>
                              <SelectItem value="Business Consultant & Manager">
                                Business Consultant & Manager
                              </SelectItem>
                              <SelectItem value="Coaching">Coaching</SelectItem>
                              <SelectItem value="Community">
                                Community
                              </SelectItem>
                              <SelectItem value="Consultation Call">
                                Consultation Call
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormField>

                        {/* Message */}
                        <FormField
                          label="Your Message"
                          required
                          error={touched.message ? errors.message : undefined}
                        >
                          <Textarea
                            value={formData.message}
                            onChange={(e) =>
                              setFieldValue('message', e.target.value)
                            }
                            onBlur={() => setFieldTouched('message')}
                            placeholder="Tell me about your project, goals, or how I can help you..."
                            rows={6}
                            className={`bg-white border-gray-200 focus:border-primary resize-vertical min-h-[120px] ${
                              touched.message && errors.message
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                            }`}
                          />
                        </FormField>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 h-12 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </form>
                      {errorMessage && (
                        <div className="text-red-500 mt-4 text-center">
                          {errorMessage}
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat text-foreground">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:hello@dherbiequake.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@dherbiequake.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Instagram</p>
                      <a
                        href="https://www.instagram.com/dherbiequake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @dherbiequake
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/aladeoluwapelumi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Alade Oluwapelumi
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Lagos, Nigeria (Remote Services)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4 font-montserrat">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Book a consultation to discuss your project and explore how
                    we can work together.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto"
                  >
                    <Link to="/consultation">Book Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
