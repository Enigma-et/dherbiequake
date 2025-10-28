import {
  BarChart3,
  ClipboardList,
  Dumbbell,
  MessageCircle,
  Phone,
  Sprout,
  Target,
} from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/coaching')({
  component: Coaching,
})

function Coaching() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center"
            animation="fade-up"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sprout className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-montserrat leading-tight">
              The Coaching
              <span className="block text-primary">Experience</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <div className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-8 font-lato italic">
              Personal. Strategic. Purposeful. Transformational.
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              This isn't just a coaching program, it is a structured growth
              experience designed for builders, visionaries, and purpose-led
              minds ready to align who they are with what they are building.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/consultation">Start Your Journey</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Coaching Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-12 border-l-4 border-primary">
              <p className="text-xl text-foreground leading-relaxed font-lato italic">
                If you've been feeling overwhelmed, uncertain, or confused, this
                space was built for you. Here, coaching isn't a class, and it is
                not generic advice. It is an intentional, one-on-one coaching
                where we walk your unique journey together unpacking the noise,
                redefining direction, and activating the power to move forward
                boldly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                    Strategic
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every conversation, session and assignment builds traction
                    toward your specific goals and vision.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Dumbbell className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                    Purposeful
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    It's a relationship of accountability, alignment, and
                    intentional transformation in personal clarity, mindset, and
                    life-business integration.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Having a coach isn't optional, it's wise. It's bold. It's
                necessary. You already have vision. I help you make it
                actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* This Space Is For You Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              This Space Is For You If You Are:
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                        Building Something New
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Trying to turn your ideas into a clear offer and need
                        guidance to structure your vision.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                        Finding Your Voice
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Struggling to find your voice, lane, or direction and
                        need clarity on your unique path.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                        In Transition
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        In a transition season and uncertain about what's next
                        in your career or business.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                        Ready for Action
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Tired of "taking notes" and ready to take action toward
                        real transformation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                        Seeking Recognition
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ready to be seen, heard, and paid for what you bring to
                        the world.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                        Called to More
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Feeling called to more, but unsure how to show up
                        powerfully in your purpose.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-primary/10 rounded-2xl p-6 inline-block">
                <p className="text-lg text-primary font-medium italic">
                  If this resonates, this coaching space is for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure & Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              Structure & Support
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              This experience is designed for transformation that sticks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                    Biweekly 1:1 Coaching Calls
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Strategic, Reflective, Action-Based sessions tailored to
                    your unique journey and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                    Ongoing Check-ins & Accountability
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Regular support between sessions to keep you on track and
                    accountable to your goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                    Strategic Assignments + Personalized Tools
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Custom exercises and resources designed specifically for
                    your growth and transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                    A Custom Growth Plan
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Built around your unique goals, challenges, and vision for
                    transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                    Progress You Can Actually Measure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Clear metrics and milestones to track your growth and
                    celebrate your wins.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Track Options Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              Track Options
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* 3-Month Experience */}
              <Card className="relative bg-white border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
                <CardContent className="p-8 pt-12">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-montserrat">
                      3-Month Experience
                    </h3>
                    <p className="text-primary text-lg font-semibold">
                      For clarity, direction, and quick progress
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        6 Biweekly 1:1 Coaching Calls
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Ongoing Check-ins & Accountability
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Custom Growth Plan & Tools
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Progress Tracking & Milestones
                      </span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/consultation">Start 3-Month Journey</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 6-Month Experience */}
              <Card className="relative bg-white border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-montserrat">
                      6-Month Experience
                    </h3>
                    <p className="text-primary text-lg font-semibold">
                      For deep transformation and sustained alignment
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        12 Biweekly 1:1 Coaching Calls
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Extended Check-ins & Accountability
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Comprehensive Growth Plan & Tools
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Advanced Progress Tracking
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">
                        Long-term Strategy Development
                      </span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/consultation">Start 6-Month Journey</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Your Move CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-montserrat leading-tight">
              Your Move
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-12 border border-white/20 mx-4">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-lato italic mb-6">
                "Growth is not accidental - it's intentional. And sometimes, the
                missing piece isn't more information... it's guidance that meets
                you where you are and walks you into transforming."
              </p>
              <p className="text-base sm:text-lg leading-relaxed opacity-90">
                This coaching experience helps you bridge the gap between
                purpose and performance, vision and transformation, knowing and
                doing.
              </p>
            </div>

            <p className="text-lg sm:text-xl mb-12 leading-relaxed opacity-90">
              Be the one who chooses growth boldly, intentionally, and without
              limits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white w-full sm:w-auto touch-target"
              >
                <Link to="/consultation">Book Your Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto touch-target"
              >
                <Link to="/about">Learn More About My Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
