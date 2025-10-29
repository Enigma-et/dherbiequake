import {
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  RefreshCw,
  User,
  X,
} from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FormField } from '@/components/ui/form-field'
// import { env } from '@/env'
import { consultationFormSchema, useFormValidation } from '@/lib/validation'

export const Route = createFileRoute('/consultation')({
  component: Consultation,
})

interface BookingData {
  duration: '30min' | '60min' | null
  service: string
  date: string
  time: string
  name: string
  email: string
  whatsapp: string
  message: string
  paymentReference?: string
  paymentStatus?: 'cancelled' | 'successful' | 'failed'
}

function Consultation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    duration: null,
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  })

  const formValidation = useFormValidation(consultationFormSchema, {
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  })

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...updates }))
    // Also update form validation data for step 5
    if (updates.name !== undefined)
      formValidation.setFieldValue('name', updates.name)
    if (updates.email !== undefined)
      formValidation.setFieldValue('email', updates.email)
    if (updates.whatsapp !== undefined)
      formValidation.setFieldValue('whatsapp', updates.whatsapp)
    if (updates.message !== undefined)
      formValidation.setFieldValue('message', updates.message)
  }

  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              Book Your
              <span className="block text-primary">Consultation</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12">
              Let's discuss how we can transform your vision into reality.
              Choose your preferred session duration and let's start your
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Progress */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 md:space-x-8">
              {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step === currentStep
                        ? 'bg-primary text-white'
                        : step < currentStep
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      step
                    )}
                  </div>
                  {step < 7 && (
                    <div
                      className={`hidden md:block w-8 md:w-16 h-0.5 mx-2 ${
                        step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of 7:{' '}
                {currentStep === 1
                  ? 'Duration Selection'
                  : currentStep === 2
                    ? 'Service Selection'
                    : currentStep === 3
                      ? 'Date Selection'
                      : currentStep === 4
                        ? 'Time Selection'
                        : currentStep === 5
                          ? 'Booking Details'
                          : currentStep === 6
                            ? 'Payment'
                            : 'Confirmation'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Booking Form */}
      {currentStep === 5 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
                  Your Details
                </h2>
                <p className="text-lg text-muted-foreground">
                  Please provide your contact information to complete the
                  booking.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      {/* Full Name */}
                      <FormField
                        label="Full Name"
                        required
                        error={formValidation.errors.name}
                      >
                        <input
                          type="text"
                          value={formValidation.data.name || ''}
                          onChange={(e) =>
                            formValidation.setFieldValue('name', e.target.value)
                          }
                          onBlur={() => formValidation.setFieldTouched('name')}
                          placeholder="Enter your full name"
                          className={`w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-foreground transition-colors h-12 ${
                            formValidation.touched.name &&
                            formValidation.errors.name
                              ? 'border-red-500 focus:border-red-500'
                              : ''
                          }`}
                        />
                      </FormField>

                      {/* Email Address */}
                      <FormField
                        label="Email Address"
                        required
                        error={formValidation.errors.email}
                      >
                        <input
                          type="email"
                          value={formValidation.data.email || ''}
                          onChange={(e) =>
                            formValidation.setFieldValue(
                              'email',
                              e.target.value,
                            )
                          }
                          onBlur={() => formValidation.setFieldTouched('email')}
                          placeholder="Enter your email address"
                          className={`w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-foreground transition-colors h-12 ${
                            formValidation.touched.email &&
                            formValidation.errors.email
                              ? 'border-red-500 focus:border-red-500'
                              : ''
                          }`}
                        />
                      </FormField>

                      {/* WhatsApp Number */}
                      <FormField
                        label="WhatsApp Number"
                        required
                        error={formValidation.errors.whatsapp}
                      >
                        <div className="flex">
                          <select
                            className="p-4 border-2 border-gray-200 border-r-0 rounded-l-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-foreground"
                            defaultValue="+234"
                          >
                            <option value="+234">🇳🇬 +234 (Nigeria)</option>
                            <option value="+1">🇺🇸 +1 (US)</option>
                            <option value="+44">🇬🇧 +44 (UK)</option>
                            <option value="+233">🇬🇭 +233 (Ghana)</option>
                            <option value="+27">🇿🇦 +27 (South Africa)</option>
                            <option value="+254">🇰🇪 +254 (Kenya)</option>
                          </select>
                          <input
                            type="tel"
                            value={formValidation.data.whatsapp || ''}
                            onChange={(e) =>
                              formValidation.setFieldValue(
                                'whatsapp',
                                e.target.value,
                              )
                            }
                            onBlur={() =>
                              formValidation.setFieldTouched('whatsapp')
                            }
                            placeholder="Phone number"
                            className={`flex-1 p-4 border-2 border-gray-200 rounded-r-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-foreground h-12 ${
                              formValidation.touched.whatsapp &&
                              formValidation.errors.whatsapp
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                            }`}
                          />
                        </div>
                      </FormField>

                      {/* Additional Message */}
                      <FormField
                        label="Additional Message/Notes"
                        error={formValidation.errors.message}
                      >
                        <textarea
                          value={formValidation.data.message || ''}
                          onChange={(e) =>
                            formValidation.setFieldValue(
                              'message',
                              e.target.value,
                            )
                          }
                          onBlur={() =>
                            formValidation.setFieldTouched('message')
                          }
                          placeholder="Tell me what you'd like to focus on during our consultation session..."
                          rows={5}
                          className={`w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-foreground transition-colors resize-vertical min-h-[120px] ${
                            formValidation.touched.message &&
                            formValidation.errors.message
                              ? 'border-red-500 focus:border-red-500'
                              : ''
                          }`}
                        />
                      </FormField>

                      {/* Form Validation Summary */}
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <h4 className="font-semibold text-foreground mb-3">
                          Booking Summary:
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Duration:
                            </span>
                            <span className="font-semibold text-foreground">
                              {bookingData.duration === '30min'
                                ? '30 Minutes'
                                : '60 Minutes'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Service:
                            </span>
                            <span className="font-semibold text-foreground">
                              {bookingData.service}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Date & Time:
                            </span>
                            <span className="font-semibold text-foreground">
                              {(() => {
                                const date = new Date(
                                  bookingData.date + 'T00:00:00',
                                )
                                return date.toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                })
                              })()}{' '}
                              at {bookingData.time} WAT
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Total:
                            </span>
                            <span className="font-bold text-primary">
                              ₦
                              {bookingData.duration === '30min'
                                ? '25,000'
                                : '45,000'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={() => {
                    // Mark all fields as touched for validation display
                    Object.keys(formValidation.data).forEach((field) =>
                      formValidation.setFieldTouched(
                        field as keyof typeof formValidation.data,
                      ),
                    )

                    if (formValidation.validateAll()) {
                      nextStep()
                    }
                  }}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 7: Success/Failed/Cancelled States */}
      {currentStep === 7 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Success State */}
              {bookingData.paymentStatus === 'successful' && (
                <div className="text-center">
                  {/* Success Hero */}
                  <div className="mb-12">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-montserrat">
                      Booking
                      <span className="block text-green-600">Confirmed!</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Your consultation has been successfully booked and paid
                      for.
                    </p>
                  </div>

                  {/* Booking Details */}
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 mb-12">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl font-montserrat text-green-800">
                        <Calendar className="w-6 h-6 text-green-600 mr-3" />
                        Your Booking Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Duration:
                            </span>
                            <span className="font-semibold text-foreground">
                              {bookingData.duration === '30min'
                                ? '30 Minutes'
                                : '60 Minutes'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Service:
                            </span>
                            <span className="font-semibold text-foreground">
                              {bookingData.service}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Date & Time:
                            </span>
                            <span className="font-semibold text-foreground">
                              {(() => {
                                const date = new Date(
                                  bookingData.date + 'T00:00:00',
                                )
                                return date.toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                })
                              })()}{' '}
                              at {bookingData.time} WAT
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Payment Status:
                            </span>
                            <span className="font-semibold text-green-600">
                              <CheckCircle className="w-4 h-4 inline mr-1" />{' '}
                              Paid - ₦
                              {bookingData.duration === '30min'
                                ? '25,000'
                                : '45,000'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Payment Reference:
                            </span>
                            <span className="font-semibold text-foreground">
                              {bookingData.paymentReference}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Contact:
                            </span>
                            <span className="font-semibold text-foreground">
                              {bookingData.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's Next */}
                  <Card className="bg-blue-50 border-blue-200 mb-12">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl font-montserrat text-blue-800">
                        <Clock className="w-6 h-6 text-blue-600 mr-3" />
                        What Happens Next?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-blue-600 font-bold text-sm">
                              ✓
                            </span>
                          </div>
                          <div>
                            <p className="text-blue-800 font-semibold">
                              Confirmation Email
                            </p>
                            <p className="text-blue-600">
                              A detailed confirmation email will be sent to{' '}
                              <strong>{bookingData.email}</strong> within the
                              next few minutes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-blue-600 font-bold text-sm">
                              ✓
                            </span>
                          </div>
                          <div>
                            <p className="text-blue-800 font-semibold">
                              Meeting Link
                            </p>
                            <p className="text-blue-600">
                              You'll receive a secure meeting link 24 hours
                              before your session via email.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-blue-600 font-bold text-sm">
                              ✓
                            </span>
                          </div>
                          <div>
                            <p className="text-blue-800 font-semibold">
                              WhatsApp Reminder
                            </p>
                            <p className="text-blue-600">
                              A friendly reminder will be sent to your WhatsApp
                              on the day of your consultation.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-blue-600 font-bold text-sm">
                              ✓
                            </span>
                          </div>
                          <div>
                            <p className="text-blue-800 font-semibold">
                              Rescheduling
                            </p>
                            <p className="text-blue-600">
                              If you need to reschedule, simply reply to the
                              confirmation email or contact us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <a
                        href={(() => {
                          // Generate Google Calendar link
                          const title = encodeURIComponent(
                            `DherbieQuake Consultation - ${bookingData.service}`,
                          )
                          const details = encodeURIComponent(
                            `${bookingData.duration}-minute consultation session with DherbieQuake\n\n` +
                              `Service: ${bookingData.service}\n` +
                              `Your message: ${bookingData.message}\n\n` +
                              `Meeting link will be sent via email 24 hours before the session.\n\n` +
                              `Payment Reference: ${bookingData.paymentReference}\n` +
                              `Contact: ${bookingData.email}`,
                          )
                          const location = encodeURIComponent(
                            'Online (Meeting link via email)',
                          )

                          // Convert to Google Calendar date format
                          const startDateTime = (() => {
                            const date = new Date(
                              bookingData.date + 'T00:00:00',
                            )
                            const year = date.getFullYear()
                            const month = String(date.getMonth() + 1).padStart(
                              2,
                              '0',
                            )
                            const day = String(date.getDate()).padStart(2, '0')
                            const timeParts =
                              bookingData.time.match(/(\d+):(\d+) (AM|PM)/)
                            if (timeParts) {
                              let hours = parseInt(timeParts[1])
                              const minutes = timeParts[2]
                              const ampm = timeParts[3]
                              if (ampm === 'PM' && hours !== 12) hours += 12
                              if (ampm === 'AM' && hours === 12) hours = 0
                              return `${year}${month}${day}T${String(hours).padStart(2, '0')}${minutes}00Z`
                            }
                            return ''
                          })()

                          const endDateTime = (() => {
                            const durationMinutes =
                              bookingData.duration === '30min' ? 30 : 60
                            const date = new Date(
                              bookingData.date + 'T00:00:00',
                            )
                            const timeParts =
                              bookingData.time.match(/(\d+):(\d+) (AM|PM)/)
                            if (timeParts) {
                              let hours = parseInt(timeParts[1])
                              let minutes = parseInt(timeParts[2])
                              const ampm = timeParts[3]
                              if (ampm === 'PM' && hours !== 12) hours += 12
                              if (ampm === 'AM' && hours === 12) hours = 0
                              minutes += durationMinutes
                              if (minutes >= 60) {
                                hours += Math.floor(minutes / 60)
                                minutes = minutes % 60
                              }
                              const year = date.getFullYear()
                              const month = String(
                                date.getMonth() + 1,
                              ).padStart(2, '0')
                              const day = String(date.getDate()).padStart(
                                2,
                                '0',
                              )
                              return `${year}${month}${day}T${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}00Z`
                            }
                            return ''
                          })()

                          return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime}/${endDateTime}&details=${details}&location=${location}`
                        })()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="w-4 h-4 inline mr-2" /> Add to
                        Google Calendar
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Link to="/">
                        <User className="w-4 h-4 inline mr-2" /> Back to Home
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <Button
                      onClick={() => {
                        setBookingData({
                          duration: null,
                          service: '',
                          date: '',
                          time: '',
                          name: '',
                          email: '',
                          whatsapp: '',
                          message: '',
                          paymentReference: undefined,
                          paymentStatus: undefined,
                        })
                        setCurrentStep(1)
                      }}
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      <CheckCircle className="w-4 h-4 inline mr-2" /> Book
                      Another Session
                    </Button>
                  </div>
                </div>
              )}

              {/* Failed State */}
              {bookingData.paymentStatus === 'failed' && (
                <div className="text-center">
                  <div className="mb-12">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <X className="w-12 h-12 text-red-600" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-montserrat">
                      Payment
                      <span className="block text-red-600">Failed</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      We couldn't process your payment. Please try again or
                      contact support.
                    </p>
                  </div>

                  <Card className="bg-yellow-50 border-yellow-200 mb-12">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-yellow-800 mb-4">
                        What Went Wrong?
                      </h3>
                      <div className="space-y-3 text-yellow-700">
                        <p>Your payment could not be completed.</p>
                        <p>
                          <strong>Possible reasons:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Card was declined by your bank</li>
                          <li>Insufficient funds in your account</li>
                          <li>Bank authentication failed</li>
                          <li>Network connection issue</li>
                        </ul>
                        <p className="font-semibold">
                          Your booking has NOT been confirmed. No charges were
                          made to your account.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      onClick={() => setCurrentStep(6)}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <RefreshCw className="w-4 h-4 inline mr-2" /> Try Payment
                      Again
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(5)}
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <User className="w-4 h-4 inline mr-2" /> Edit Booking
                      Details
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href="mailto:support@dherbiequake.com?subject=Payment%20Issue%20-%20Booking%20Reference"
                      className="text-primary hover:text-primary/80 font-semibold"
                    >
                      <User className="w-4 h-4 inline mr-2" /> Contact Support
                    </a>
                  </div>
                </div>
              )}

              {/* Cancelled State */}
              {bookingData.paymentStatus === 'cancelled' && (
                <div className="text-center">
                  <div className="mb-12">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-12 h-12 text-orange-600" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-montserrat">
                      Payment
                      <span className="block text-orange-600">Cancelled</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      You closed the payment window without completing the
                      transaction.
                    </p>
                  </div>

                  <Card className="bg-blue-50 border-blue-200 mb-12">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">
                        What This Means
                      </h3>
                      <div className="space-y-3 text-blue-700">
                        <p>Your booking has NOT been confirmed.</p>
                        <p>
                          No payment was processed, and no charges were made to
                          your account.
                        </p>
                        <p className="font-semibold">
                          Your booking details are saved and you can complete
                          payment whenever you're ready.
                        </p>
                        <p className="text-sm">
                          Note: This time slot is not reserved until payment is
                          completed.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      onClick={() => setCurrentStep(6)}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <CreditCard className="w-4 h-4 inline mr-2" /> Complete
                      Payment
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(5)}
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <User className="w-4 h-4 inline mr-2" /> Edit Booking
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <Button
                      onClick={() => {
                        setBookingData({
                          duration: null,
                          service: '',
                          date: '',
                          time: '',
                          name: '',
                          email: '',
                          whatsapp: '',
                          message: '',
                          paymentReference: undefined,
                          paymentStatus: undefined,
                        })
                        setCurrentStep(1)
                      }}
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      <User className="w-4 h-4 inline mr-2" /> Start Over
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Step 6: Payment */}
      {currentStep === 6 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
                  Confirm & Pay
                </h2>
                <p className="text-lg text-muted-foreground">
                  Review your booking and proceed to secure payment.
                </p>
              </div>

              {/* Complete Booking Summary */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-montserrat">
                    <Calendar className="w-6 h-6 text-primary mr-3" />
                    Complete Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold text-foreground">
                          {bookingData.duration === '30min'
                            ? '30 Minutes'
                            : '60 Minutes'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service:</span>
                        <span className="font-semibold text-foreground">
                          {bookingData.service}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Date & Time:
                        </span>
                        <span className="font-semibold text-foreground">
                          {(() => {
                            const date = new Date(
                              bookingData.date + 'T00:00:00',
                            )
                            return date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          })()}{' '}
                          at {bookingData.time} WAT
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Full Name:
                        </span>
                        <span className="font-semibold text-foreground">
                          {bookingData.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-semibold text-foreground">
                          {bookingData.email}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">WhatsApp:</span>
                        <span className="font-semibold text-foreground">
                          +234 {bookingData.whatsapp}
                        </span>
                      </div>
                    </div>
                  </div>

                  {bookingData.message && (
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-muted-foreground mb-2">
                        Additional Notes:
                      </p>
                      <p className="text-foreground italic">
                        "{bookingData.message}"
                      </p>
                    </div>
                  )}

                  <Separator className="my-6" />

                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total Amount:</span>
                    <span className="text-primary">
                      ₦{bookingData.duration === '30min' ? '25,000' : '45,000'}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information Notice */}
              <Card className="bg-blue-50 border-blue-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Secure Payment Information
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          You will be redirected to Paystack to complete your
                          payment securely
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          All transactions are encrypted and PCI compliant
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          Your card details are never stored on our servers
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          Powered by Paystack - Nigeria's leading payment
                          processor
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Paystack Payment Button */}
              <div className="text-center">
                <div className="space-y-6">
                  {/* PHASE 1 NOTE: Using Paystack test public key */}
                  {/* PHASE 2 TODO: Replace with live public key from Paystack dashboard */}
                  {/* Environment variable recommended: process.env.VITE_PAYSTACK_PUBLIC_KEY */}
                  <PaystackButton
                    reference={`DQ-${new Date().getTime()}`}
                    email={bookingData.email}
                    amount={
                      bookingData.duration === '30min' ? 2500000 : 4500000
                    }
                    publicKey={import.meta.env.VITE_PAYSTACK_API_KEY}
                    metadata={{
                      custom_fields: [
                        {
                          display_name: 'Service',
                          variable_name: 'service',
                          value: bookingData.service,
                        },
                        {
                          display_name: 'Duration',
                          variable_name: 'duration',
                          value: `${bookingData.duration} minutes`,
                        },
                        {
                          display_name: 'Date',
                          variable_name: 'date',
                          value: bookingData.date,
                        },
                        {
                          display_name: 'Time',
                          variable_name: 'time',
                          value: bookingData.time,
                        },
                      ],
                    }}
                    text={`Pay ₦${bookingData.duration === '30min' ? '25,000' : '45,000'}`}
                    onSuccess={(reference) => {
                      console.log('Payment successful!', reference)
                      // Update booking data with payment reference
                      setBookingData((prev) => ({
                        ...prev,
                        paymentReference: reference.reference,
                        paymentStatus: 'successful',
                      }))
                      // Move to success step
                      setCurrentStep(7)
                    }}
                    // onClose={() => {
                    //   console.log('Payment modal closed')
                    //   // Optional: Show message to user
                    //   alert('Payment was not completed. You can try again when ready.')
                    // }}
                    className="w-full max-w-md px-8 py-4 bg-[#006BED] hover:bg-[#0056c4] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
                  />

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Secured by Paystack</span>
                  </div>

                  <button
                    onClick={() => setCurrentStep(5)}
                    className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                  >
                    ← Back to edit booking details
                  </button>
                </div>
              </div>

              {/* Test Card Information for Development */}
              {/* <Card className="bg-yellow-50 border-yellow-200 mt-8">
                <CardContent className="p-6">
                  <h4 className="font-bold text-yellow-800 mb-3">🧪 Development Test Cards</h4>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <p><strong>✅ Successful Payment:</strong> 4084 0840 8408 4081</p>
                    <p><strong>❌ Declined Payment:</strong> 5060 6666 6666 6666</p>
                    <p><strong>CVV:</strong> 408 | <strong>Expiry:</strong> Any future date</p>
                    <p><strong>PIN:</strong> 0000 | <strong>OTP:</strong> 123456</p>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Time Selection */}
      {currentStep === 4 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
                  Choose Your Time
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select your preferred consultation time slot.
                </p>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg inline-block">
                  <p className="text-primary font-semibold">
                    Timezone: WAT (West Africa Time)
                  </p>
                </div>
              </div>

              {/* Selected Date Display */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-2xl px-6 py-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">
                    {(() => {
                      const date = new Date(bookingData.date + 'T00:00:00')
                      return date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    })()}
                  </span>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                  <CardContent className="p-8">
                    {/* Mock Booked Slots Data */}
                    {(() => {
                      const mockBookedSlots = [
                        { date: '2025-10-27', time: '11:00 AM' },
                        { date: '2025-10-27', time: '2:00 PM' },
                        { date: '2025-10-28', time: '10:00 AM' },
                        { date: '2025-10-28', time: '1:00 PM' },
                        { date: '2025-10-29', time: '3:00 PM' },
                        { date: '2025-10-30', time: '11:00 AM' },
                        { date: '2025-10-30', time: '4:00 PM' },
                        { date: '2025-10-31', time: '10:00 AM' },
                        { date: '2025-10-31', time: '11:00 AM' },
                        { date: '2025-10-31', time: '2:00 PM' },
                      ]

                      const allTimeSlots = [
                        '10:00 AM',
                        '11:00 AM',
                        '12:00 PM',
                        '1:00 PM',
                        '2:00 PM',
                        '3:00 PM',
                        '4:00 PM',
                      ]

                      const isTimeBooked = (time: string) => {
                        return mockBookedSlots.some(
                          (slot) =>
                            slot.date === bookingData.date &&
                            slot.time === time,
                        )
                      }

                      const selectedDate = new Date(
                        bookingData.date + 'T00:00:00',
                      )
                      const today = new Date()

                      // Check if all times are booked
                      const allTimesBooked = allTimeSlots.every((time) =>
                        isTimeBooked(time),
                      )

                      return (
                        <>
                          {allTimesBooked ? (
                            <div className="text-center py-12">
                              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <X className="w-8 h-8 text-red-600" />
                              </div>
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                No Available Times
                              </h3>
                              <p className="text-muted-foreground mb-6">
                                All time slots are booked for this date. Please
                                select a different day.
                              </p>
                              <Button
                                onClick={() => setCurrentStep(3)}
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary hover:text-white"
                              >
                                Choose Different Date
                              </Button>
                            </div>
                          ) : (
                            <>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                                {allTimeSlots.map((time) => {
                                  const booked = isTimeBooked(time)
                                  const selected = bookingData.time === time
                                  const isPastTime =
                                    selectedDate.toDateString() ===
                                      today.toDateString() &&
                                    new Date(
                                      `${bookingData.date} ${time}`,
                                    ).getTime() < today.getTime()

                                  return (
                                    <button
                                      key={time}
                                      onClick={() =>
                                        !booked &&
                                        !isPastTime &&
                                        updateBookingData({ time })
                                      }
                                      disabled={booked || isPastTime}
                                      className={`aspect-square rounded-2xl border-2 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center relative ${
                                        selected
                                          ? 'border-primary bg-primary text-white shadow-lg'
                                          : booked
                                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                                            : isPastTime
                                              ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                                              : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5 cursor-pointer'
                                      }`}
                                      title={
                                        booked
                                          ? 'This time is unavailable. Please select another time.'
                                          : isPastTime
                                            ? 'This time has passed. Please select a future time.'
                                            : `${time} WAT - Click to select`
                                      }
                                    >
                                      <span className="text-lg font-bold mb-1">
                                        {time}
                                      </span>
                                      <span className="text-xs opacity-75">
                                        {selected
                                          ? 'Selected'
                                          : booked
                                            ? 'Booked'
                                            : isPastTime
                                              ? 'Past'
                                              : 'Available'}
                                      </span>
                                      {selected && (
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                          <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                      )}
                                      {booked && (
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                          <X className="w-3 h-3 text-white" />
                                        </div>
                                      )}
                                    </button>
                                  )
                                })}
                              </div>

                              {bookingData.time && (
                                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                                  <div className="flex items-center justify-center space-x-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <p className="text-primary font-semibold">
                                      You've selected: {bookingData.time} WAT
                                    </p>
                                  </div>
                                  <p className="text-sm text-muted-foreground text-center mt-2">
                                    Duration:{' '}
                                    {bookingData.duration === '30min'
                                      ? '30 minutes'
                                      : '60 minutes'}{' '}
                                    • Service: {bookingData.service}
                                  </p>
                                </div>
                              )}
                            </>
                          )}
                        </>
                      )
                    })()}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={nextStep}
                  disabled={!bookingData.time}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  Continue to Booking Details
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Date Selection */}
      {currentStep === 3 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
                  Choose Your Date
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select your preferred consultation date from the available
                  options.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2 font-montserrat">
                        This Week
                      </h3>
                      <p className="text-muted-foreground">
                        {(() => {
                          const today = new Date()
                          const startOfWeek = new Date(today)
                          startOfWeek.setDate(
                            today.getDate() - today.getDay() + 1,
                          ) // Monday
                          const endOfWeek = new Date(startOfWeek)
                          endOfWeek.setDate(startOfWeek.getDate() + 6) // Sunday

                          const formatDate = (date: Date) => {
                            return date.toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          }

                          return `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`
                        })()}
                      </p>
                    </div>

                    <div className="grid grid-cols-7 gap-3">
                      {(() => {
                        const today = new Date()
                        const startOfWeek = new Date(today)
                        startOfWeek.setDate(
                          today.getDate() - today.getDay() + 1,
                        ) // Monday

                        const weekDays = []
                        for (let i = 0; i < 7; i++) {
                          const date = new Date(startOfWeek)
                          date.setDate(startOfWeek.getDate() + i)

                          const dayName = date.toLocaleDateString('en-US', {
                            weekday: 'short',
                          })
                          const dayNumber = date.getDate()
                          const isToday =
                            date.toDateString() === today.toDateString()
                          const isSelected =
                            bookingData.date ===
                            date.toISOString().split('T')[0]

                          weekDays.push(
                            <button
                              key={i}
                              onClick={() =>
                                updateBookingData({
                                  date: date.toISOString().split('T')[0],
                                })
                              }
                              className={`aspect-square rounded-2xl border-2 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center ${
                                isSelected
                                  ? 'border-primary bg-primary/10 text-primary shadow-lg'
                                  : isToday
                                    ? 'border-primary/50 bg-primary/5 text-primary'
                                    : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                              }`}
                            >
                              <span className="text-xs font-medium text-muted-foreground mb-1">
                                {dayName}
                              </span>
                              <span
                                className={`text-lg font-bold ${
                                  isSelected || isToday
                                    ? 'text-primary'
                                    : 'text-foreground'
                                }`}
                              >
                                {dayNumber}
                              </span>
                            </button>,
                          )
                        }
                        return weekDays
                      })()}
                    </div>

                    {bookingData.date && (
                      <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-primary font-medium text-center">
                          Selected:{' '}
                          {(() => {
                            const date = new Date(
                              bookingData.date + 'T00:00:00',
                            )
                            return date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                          })()}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                      <p>All times are in WAT (West Africa Time)</p>
                      <p className="mt-2">
                        Next available dates will be shown after selecting your
                        preferred time slot.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={nextStep}
                  disabled={!bookingData.date}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  Continue to Time Selection
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Service Selection */}
      {currentStep === 2 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
                  Choose Your Service
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select the service area you'd like to focus on during your
                  consultation.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          Service Area *
                        </label>
                        <select
                          value={bookingData.service}
                          onChange={(e) =>
                            updateBookingData({ service: e.target.value })
                          }
                          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-foreground"
                        >
                          <option value="">Select a service area...</option>
                          <option value="Brand Strategist">
                            Brand Strategist
                          </option>
                          <option value="Marketing Consultant">
                            Marketing Consultant
                          </option>
                          <option value="Content Marketer">
                            Content Marketer
                          </option>
                          <option value="Creative Director">
                            Creative Director
                          </option>
                          <option value="Business Consultant & Manager">
                            Business Consultant & Manager
                          </option>
                          <option value="Coaching">Coaching</option>
                          <option value="Community">Community</option>
                          <option value="Consultation Call">
                            Consultation Call
                          </option>
                        </select>
                      </div>

                      {bookingData.service && (
                        <div className="bg-white/50 rounded-lg p-6 border border-primary/20">
                          <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                            {bookingData.service}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {bookingData.service === 'Brand Strategist' &&
                              'Strategic brand development, messaging, positioning, and identity creation for authentic brand presence.'}
                            {bookingData.service === 'Marketing Consultant' &&
                              'Comprehensive marketing strategy, funnel optimization, team development, and growth-driven marketing systems.'}
                            {bookingData.service === 'Content Marketer' &&
                              'Strategic content creation, social media storytelling, and growth-driven content systems that convert.'}
                            {bookingData.service === 'Creative Director' &&
                              'Creative vision leadership, brand alignment across touchpoints, and visual storytelling that creates impact.'}
                            {bookingData.service ===
                              'Business Consultant & Manager' &&
                              'Operational systems, team workflows, process optimization, and structures for sustainable business growth.'}
                            {bookingData.service === 'Coaching' &&
                              'Personal and strategic coaching for purpose-led minds ready to align vision with action and create transformation.'}
                            {bookingData.service === 'Community' &&
                              'The Quake Core community for bold minds growing, connecting, and transforming together with shared purpose.'}
                            {bookingData.service === 'Consultation Call' &&
                              'General consultation to discuss your needs and determine the best approach for your transformation journey.'}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={nextStep}
                  disabled={!bookingData.service}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  Continue to Date Selection
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 1: Duration Selection */}
      {currentStep === 1 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">
                  Choose Your Session Duration
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select the consultation length that best fits your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
                {/* 30-Minute Session */}
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 ${
                    bookingData.duration === '30min'
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => updateBookingData({ duration: '30min' })}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                      30-Minute Session
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-4">
                      ₦25,000
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Perfect for initial consultations, quick strategy
                      sessions, or focused problem-solving discussions.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Strategy Discussion
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Quick Assessment
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Action Plan
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 60-Minute Session */}
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 ${
                    bookingData.duration === '60min'
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => updateBookingData({ duration: '60min' })}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                      60-Minute Session
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-4">
                      ₦45,000
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Ideal for comprehensive consultations, detailed strategy
                      development, or in-depth transformation planning.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Deep Strategy Development
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Comprehensive Assessment
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Detailed Action Plan
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Implementation Guidance
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button
                  onClick={nextStep}
                  disabled={!bookingData.duration}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  Continue to Service Selection
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Buttons */}
      {currentStep > 1 && currentStep < 7 && (
        <section className="py-8 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="px-6 py-3"
              >
                Previous
              </Button>
              <Button
                onClick={nextStep}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
              >
                Continue
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Booking Summary Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-72 sm:w-80 border hidden lg:block">
        <h3 className="text-lg font-bold text-foreground mb-4 font-montserrat">
          Booking Summary
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-semibold text-foreground">
              {bookingData.duration === '30min'
                ? '30 Minutes'
                : bookingData.duration === '60min'
                  ? '60 Minutes'
                  : 'Not selected'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service:</span>
            <span className="font-semibold text-foreground">
              {bookingData.service || 'Not selected'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date & Time:</span>
            <span className="font-semibold text-foreground">
              {bookingData.date && bookingData.time
                ? `${bookingData.date} ${bookingData.time}`
                : 'Not selected'}
            </span>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-primary">
              ₦
              {bookingData.duration === '30min'
                ? '25,000'
                : bookingData.duration === '60min'
                  ? '45,000'
                  : '0'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
