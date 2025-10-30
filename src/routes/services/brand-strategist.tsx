import { BookOpen, FileText, Target, Theater, Users } from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/services/brand-strategist')({
  component: BrandStrategist,
})

function BrandStrategist() {
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
            animation="fade-up"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Target className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              Brand
              <span className="block text-primary">Strategy</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              A brand is a voice, a presence, a truth waiting to be understood.
              As a Brand Strategist, I help brands peel back the noise to find
              their true essence of who they are, who they serve, and how to
              speak in a way that connects deeply and converts intentionally.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto" animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              What I Do
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-0 shadow-lg mb-12">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  I bring depth and direction into brands that want more than
                  visibility. Through intentional strategy, I build messaging
                  systems that speak clearly and consistently.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-4xl mx-auto"
            animation="fade-up"
            delay={200}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              Focus Areas
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection animation="scale" delay={100}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-montserrat">
                        Brand Messaging & Positioning
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Crafting clear, compelling messages that resonate with
                      your audience and differentiate you in the market.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={200}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-montserrat">
                        Audience Clarity & Market Insight
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Understanding who you serve and how to reach them
                      effectively through deep market research and analysis.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={300}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-montserrat">
                        Brand Story & Verbal Identity
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Developing your unique narrative and voice that tells your
                      story in a way that connects emotionally.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={400}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Theater className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-montserrat">
                        Brand Tone & Core Communication Frameworks
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Establishing consistent communication guidelines that
                      reflect your brand personality across all channels.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto" animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              My Approach
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                          Discovery
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Every project starts with discovery, understanding
                          your story and audience. We dive deep into your
                          brand's history, values, and goals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                          Structure
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Then comes structure: refining your brand's
                          positioning, tone, and core story until everything
                          aligns perfectly.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                          Results
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The result? A brand that feels alive, speaks clearly,
                          and attracts naturally. Your message becomes magnetic.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center"
            animation="fade-up"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
              <blockquote className="text-2xl md:text-3xl text-foreground italic leading-relaxed font-lato">
                "When a brand knows its voice, its message moves people. That is
                where I come in to help you align your identity with your
                purpose so your brand doesn't just exist... it resonates."
              </blockquote>
            </div>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Let's build a brand that doesn't just stand out but stands true.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/consultation">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
