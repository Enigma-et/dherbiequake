import {
  BarChart3,
  ClipboardList,
  RefreshCw,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/services/marketing-consultant')({
  component: MarketingConsultant,
})

function MarketingConsultant() {
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
              <TrendingUp className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              Marketing
              <span className="block text-primary">Consultant</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              As a Marketing Consultant, I guide brands to build systems that
              attract, nurture, and convert the right audience intentionally,
              not accidentally. I help founders move from confusion to clarity
              by turning scattered efforts into structured marketing that
              actually drives growth.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              What I Do
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-0 shadow-lg mb-12">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  I audit, guide, and optimize marketing efforts for alignment
                  and impact ensuring every campaign reflects strategy, not
                  guesswork. We start by identifying what's working and what's
                  not. Then, I build frameworks and actionable roadmaps that
                  help your brand grow with structure from visibility to
                  loyalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              Focus Areas
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">
                      Marketing Strategy & Planning
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing comprehensive marketing strategies that align
                    with your business goals and drive measurable results.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <RefreshCw className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">
                      Funnel Design & Customer Journey Mapping
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating optimized customer journeys that guide prospects
                    from awareness to conversion and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">
                      Marketing Team Development & Leadership
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Building and leading high-performing marketing teams with
                    clear roles, processes, and growth paths.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">
                      Insight-Driven Growth Systems
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementing data-driven systems that provide insights and
                    drive continuous improvement in marketing performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat text-center">
              My Approach
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                        Assessment
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We start by identifying what's working and what's not. I
                        conduct a comprehensive audit of your current marketing
                        efforts and identify opportunities for improvement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                        Strategy Development
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Then, I build frameworks and actionable roadmaps that
                        help your brand grow with structure. Every
                        recommendation is backed by data and aligned with your
                        goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                        Implementation & Growth
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Finally, we execute with precision, moving your brand
                        from visibility to loyalty. The result is sustainable,
                        measurable growth that compounds over time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
              <blockquote className="text-2xl md:text-3xl text-foreground italic leading-relaxed font-lato">
                "Let's grow on purpose, not by chance. I help founders move from
                confusion to clarity by turning scattered efforts into
                structured marketing that actually drives growth."
              </blockquote>
            </div>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Ready to transform your marketing from guesswork to growth engine?
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
          </div>
        </div>
      </section>
    </div>
  )
}
