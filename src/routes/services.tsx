import { Link, Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import { Building, Palette, PenTool, Target, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/AnimatedSection'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  const location = useLocation()

  // If we're on a child route, render the child component
  if (location.pathname !== '/services') {
    return <Outlet />
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
            className="max-w-4xl mx-auto text-center"
            animation="slide-right"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              Professional
              <span className="block text-primary">Services</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12">
              Strategic solutions for brands, businesses, and individuals ready
              to grow without limits. Choose the service that aligns with your
              transformation goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
            animation="fade-up"
            delay={200}
          >
            {/* Service 1: Brand Strategist */}
            <AnimatedSection animation="scale" delay={100}>
              <Card className="group relative bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Brand Strategist
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A brand is a voice, a presence, a truth waiting to be
                    understood. As a Brand Strategist, I help brands peel back
                    the noise to find their true essence of who they are, who
                    they serve, and how to speak in a way that connects deeply
                    and converts intentionally.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Brand Messaging
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Positioning
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Identity
                      </Badge>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                    aria-label="Learn more about Brand Strategist services"
                  >
                    <Link to="/services/brand-strategist">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Service 2: Marketing Consultant */}
            <AnimatedSection animation="scale" delay={200}>
              <Card className="group relative bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Marketing Consultant
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    As a Marketing Consultant, I guide brands to build systems
                    that attract, nurture, and convert the right audience
                    intentionally, not accidentally. I help founders move from
                    confusion to clarity by turning scattered efforts into
                    structured marketing that actually drives growth.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Strategy
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Funnels
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Growth
                      </Badge>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                  >
                    <Link to="/services/marketing-consultant">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Service 3: Content Marketer */}
            <AnimatedSection animation="scale" delay={300}>
              <Card className="group relative bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <PenTool className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Content Marketer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Content is not about posting, it's about positioning. Every
                    story told is a bridge between your purpose and your people.
                    As a Content Marketer, I translate strategy into
                    storytelling that connects, converts, and compounds.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Strategy
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Storytelling
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Systems
                      </Badge>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                  >
                    <Link to="/services/content-marketer">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Service 4: Creative Director */}
            <AnimatedSection animation="scale" delay={400}>
              <Card className="group relative bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Creative Director
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I see creativity as translation turning vision into
                    something people can feel. Every brand has a pulse, a rhythm
                    that deserves to be heard and seen. My role as a Creative
                    Director is to find that rhythm and express it through
                    visuals, stories, and experiences.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Direction
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Visuals
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Expression
                      </Badge>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                  >
                    <Link to="/services/creative-director">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Service 5: Business Consultant & Manager */}
            <AnimatedSection animation="scale" delay={500}>
              <Card className="group relative bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Business Consultant & Manager
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A thriving business isn't built on effort alone, it is built
                    on structure. As a Business Consultant and Manager, I refine
                    your systems, strengthen your teams, and align your
                    operations with your mission.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Systems
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Operations
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Scale
                      </Badge>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                  >
                    <Link to="/services/business-consultant">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Every project, brand, and person I work with is proof that
              transformation is continuous. Let's discuss how we can create your
              breakthrough together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/about">Learn About My Approach</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
