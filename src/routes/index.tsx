import { Link, createFileRoute } from '@tanstack/react-router'
import {
  BarChart3,
  Briefcase,
  Camera,
  Mail,
  Palette,
  Sparkles,
  Sprout,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedSection } from '@/components/AnimatedSection'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-primary/5">
      {/* Hero Section */}

      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/10 animate-seismic-fade-in"></div>

        {/* Animated background circles for seismic effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full animate-multi-ripple"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full animate-multi-ripple delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full animate-multi-ripple delay-500"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Main Tagline */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 md:mb-8 font-montserrat leading-tight tracking-tight">
              DherbieQuake
            </h1>
          </AnimatedSection>

          {/* Seamlessly Merged Subheading */}
          <AnimatedSection
            className="max-w-5xl mx-auto mb-10 md:mb-14 px-4"
            animation="fade-up"
            delay={200}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-lato">
              <span className="text-primary">
                The epicenter of positive impact, intentional growth, and
                transformation.
              </span>
              {/* <span className="text-muted-foreground font-light">
                {' '}
                — where internal alignment creates ripple effects that reshape
                your mindset, amplify your growth, and clarify your purpose.
              </span> */}
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            animation="fade-up"
            delay={300}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto touch-target"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto touch-target"
            >
              <Link to="/consultation">Book Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Service Suite Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16" animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
              DHERBIEQUAKE SERVICE SUITE
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here for Brands, Businesses & Individuals
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1: Coaching & Personal Growth */}
            <AnimatedSection
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              animation="scale"
              delay={100}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary">C</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                  COACHING & PERSONAL GROWTH
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For builders and purpose-led Individuals finding direction,
                  and confidence to grow boldly.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Focus Areas:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Clarity & Purpose Coaching
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Personal Brand Direction
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Confidence & Mindset Growth
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Vision Alignment & Action Systems
                    </li>
                  </ul>
                </div>
                <p className="text-primary font-medium italic mb-6">
                  When something within you shifts, everything outside begins to
                  align.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg"
                >
                  <Link to="/coaching">Explore Coaching</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Service 2: Brand Clarity & Creative Direction */}
            <AnimatedSection
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              animation="scale"
              delay={200}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary">B</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                  BRAND CLARITY & CREATIVE DIRECTION
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For Brands crafting identity, expression, and emotional
                  connection.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Services:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Brand Strategy - clarity that speaks and connects
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Creative Direction - expression that aligns emotion and
                      strategy
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Content Marketing - storytelling that connects, converts,
                      and compounds
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Focus Areas:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Brand Messaging & Positioning
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Verbal & Visual Identity
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Content Systems & Story Frameworks
                    </li>
                  </ul>
                </div>
                <p className="text-primary font-medium italic mb-6">
                  When your message is aligned, your brand becomes magnetic.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg"
                >
                  <Link to="/services">Explore Brand Services</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Service 3: Business Strategy & Structure */}
            <AnimatedSection
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              animation="scale"
              delay={300}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary">S</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                  BUSINESS STRATEGY & STRUCTURE
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For Businesses - creating systems that sustain growth.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Services:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Marketing Consulting - purposeful growth built on data and
                      clarity
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Business Consulting & Management - structure that sustains
                      scale
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Content Marketing - storytelling that drives measurable
                      impact
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Focus Areas:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Marketing & Funnel Systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Team Workflow & Process Mapping
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      Growth Strategy & Brand-Driven Execution
                    </li>
                  </ul>
                </div>
                <p className="text-primary font-medium italic mb-6">
                  Every business I work with becomes part of a connected system.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg"
                >
                  <Link to="/services">Explore Business Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom CTA Section */}
          <AnimatedSection
            className="text-center mt-16"
            animation="fade-up"
            delay={400}
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              There is always a room for improvement growth and transformation.
              Whether it is for you, your brand, or your business, I help you
              find the alignment, strategy, and systems that move you forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/consultation">Book a consultation session</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-linear-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16" animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Client Transformations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories of growth, clarity, and transformation from those
              who've experienced the DherbieQuake impact.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="max-w-6xl mx-auto"
            animation="fade-up"
            delay={200}
          >
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Testimonial 1 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection
                    className="h-full"
                    animation="scale"
                    delay={100}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl font-bold text-primary">
                              S
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              Sarah Chen
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Brand Founder, TechFlow
                            </p>
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                          "Working with DherbieQuake transformed not just my
                          brand, but my entire approach to business. The clarity
                          I gained helped me scale from confusion to a clear $2M
                          revenue strategy in just 6 months."
                        </blockquote>
                        <div className="flex text-primary">
                          <span className="text-yellow-400">★★★★★</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </CarouselItem>

                {/* Testimonial 2 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection
                    className="h-full"
                    animation="scale"
                    delay={200}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl font-bold text-primary">
                              M
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              Marcus Rodriguez
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Creative Director, InnovateLab
                            </p>
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                          "The coaching sessions were game-changing.
                          DherbieQuake helped me find my voice and direction
                          when I was completely lost. Now I'm leading with
                          confidence and my team respects my vision."
                        </blockquote>
                        <div className="flex text-primary">
                          <span className="text-yellow-400">★★★★★</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </CarouselItem>

                {/* Testimonial 3 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection
                    className="h-full"
                    animation="scale"
                    delay={300}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl font-bold text-primary">
                              A
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              Amara Okafor
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Business Owner, GreenTech Solutions
                            </p>
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                          "The business strategy work was incredible.
                          DherbieQuake didn't just give me systems - they gave
                          me a complete operational framework that scaled my
                          business by 300% in one year."
                        </blockquote>
                        <div className="flex text-primary">
                          <span className="text-yellow-400">★★★★★</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </CarouselItem>

                {/* Testimonial 4 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection
                    className="h-full"
                    animation="scale"
                    delay={400}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl font-bold text-primary">
                              J
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              James Park
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Content Creator, DigitalStory Co.
                            </p>
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                          "The content marketing strategy completely transformed
                          our engagement. We went from struggling to post
                          consistently to having a content system that drives
                          real business results."
                        </blockquote>
                        <div className="flex text-primary">
                          <span className="text-yellow-400">★★★★★</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white/90 hover:bg-white border-primary/20 text-primary hover:text-primary" />
              <CarouselNext className="right-0 bg-white/90 hover:bg-white border-primary/20 text-primary hover:text-primary" />
            </Carousel>
          </AnimatedSection>

          {/* Bottom CTA */}
          <AnimatedSection
            className="text-center mt-16"
            animation="fade-up"
            delay={300}
          >
            <p className="text-lg text-muted-foreground mb-8">
              Ready to create your own transformation story?
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
      {/* Instagram Feed Section */}

      {/* Final CTA Section */}
      <section className="py-20 bg-linear-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-primary/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            className="text-center max-w-4xl mx-auto"
            animation="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-montserrat leading-tight px-4">
              Ready to Create Your
              <span className="block text-yellow-300">
                Transformation Story?
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed opacity-90 font-lato px-4">
              Every interaction with me is designed to spark something within —
              action, power, growth, and transformation.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-12 border border-white/20 mx-4">
              <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
                "There is always room for improvement. Every project, brand, and
                person I work with is proof that transformation is continuous."
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <span className="text-base sm:text-lg font-semibold">
                  DherbieQuake
                </span>
              </div>
            </div>

            {/* Instagram CTA */}
            <AnimatedSection
              className="text-center mt-16"
              animation="fade-up"
              delay={400}
            >
              <a
                href="https://www.instagram.com/dherbiequake"
                className="inline-block animate-bounce"
              >
                <div className="inline-flex items-center space-x-4 bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-full">
                  <div className="bg-white rounded-full px-6 py-3 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                      <Camera className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-primary">
                      Follow @dherbiequake
                    </span>
                  </div>
                </div>
              </a>

              <p className="text-muted-foreground mt-4 text-white">
                For daily insights, tips, and transformation stories
              </p>
            </AnimatedSection>

            {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white w-full sm:w-auto"
              >
                <Link to="/services">Explore</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white hover:text-primary px-6 sm:px-10 py-3 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              >
                <Link to="/consultation">Book a consultation session</Link>
              </Button>
            </div> */}

            <div className="mt-12 pt-8 border-t border-white/20 px-4">
              <p className="text-base sm:text-lg opacity-75 mb-4 text-center">
                Helping individuals and brands move forward between "what's
                next" and "how to start"
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-60">
                <span className="flex items-center">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 inline mr-1" />{' '}
                  Professional Coaching
                </span>
                <span className="flex items-center">
                  <Target className="w-3 sm:w-4 h-3 sm:h-4 inline mr-1" /> Brand
                  Strategy
                </span>
                <span className="flex items-center">
                  <BarChart3 className="w-3 sm:w-4 h-3 sm:h-4 inline mr-1" />{' '}
                  Business Growth
                </span>
                <span className="flex items-center">
                  <Star className="w-3 sm:w-4 h-3 sm:h-4 inline mr-1" />{' '}
                  Personal Transformation
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
