import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              My Journey to
              <span className="block text-primary">Transformation</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every part of my journey has been about growth: breaking limits, moving boldly, and turning purpose into something that transforms both life and work.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-lato">
                I live for growth, depth, and alignment, the kind that changes how people see themselves and what they are capable of.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                I am <strong className="text-primary">Alade Oluwapelumi Mercy</strong> and I go by <strong className="text-primary">DherbieQuake</strong>. Over the past 5 years, I've journeyed through the business space as an entrepreneur, building and leading <strong>BizVitae LTD</strong> and other business brands that have shaped how I see growth, leadership, and impact.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                Currently wearing multiple hats and learning firsthand what it means to create structure, strategy, and systems that work. Right now, I manage a dynamic team across different projects, helping brands, businesses and individuals move from just concepts to real, sustainable growth.
              </p>

              <div className="bg-primary/5 rounded-2xl p-8 my-12 border-l-4 border-primary">
                <p className="text-xl text-primary font-medium italic leading-relaxed">
                  "I'm passionate about mindset, growth, and showing up with purpose because business, for me, isn't just what I do, it's who I've become."
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                At my core is a mission to help builders and purpose-led minds move boldly with clarity and without limits in life, in business, and in purpose.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                Through my work, every experience gathered, every shift survived, and every space held has led me here: To walk boldly, live purposefully, and grow relentlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Growth Philosophy
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                    Growth Starts Within
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe growth starts from within. Every project, brand, and story I build reflects the truth that when something within you shifts... everything outside starts to align.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                    Disrupt & Rise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I don't just move through life, I disrupt comfort zones, push beyond limits, and build systems that help people rise inside and out.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <blockquote className="text-2xl text-foreground italic leading-relaxed font-lato">
                "This isn't just about me, it is my commitment to lead, build, and inspire from the core where true growth and transformation happen."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                What I Do
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Growth to me isn't abstract, it's actionable. It's built through strategy, structure and action power.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1: Brand Strategist */}
              <Card className="group bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Brand Strategist
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I help brands find clarity and communicate their value with intention. This includes: brand messaging, positioning, audience clarity, brand tone, and verbal identity.
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    Strategy & Identity
                  </Badge>
                </CardContent>
              </Card>

              {/* Service 2: Marketing Consultant */}
              <Card className="group bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Marketing Consultant
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I audit, guide, and optimize marketing efforts to drive purposeful growth. This includes: marketing strategies, marketing team development, customer journey mapping, and funnel optimization.
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    Growth & Optimization
                  </Badge>
                </CardContent>
              </Card>

              {/* Service 3: Content Marketer */}
              <Card className="group bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Content Marketer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I turn strategy into storytelling that connects, converts, and compounds. This includes: content calendars, social media storytelling, and growth-driven content systems.
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    Storytelling & Content
                  </Badge>
                </CardContent>
              </Card>

              {/* Service 4: Creative Director */}
              <Card className="group bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Creative Director
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I translate ideas into expressions that move people and tell brand stories that stick. This includes: creative direction, execution oversight, and brand alignment across all touchpoints.
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    Creative & Expression
                  </Badge>
                </CardContent>
              </Card>

              {/* Service 5: Business Consultant & Manager */}
              <Card className="group bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="text-xl font-bold text-primary">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat group-hover:text-primary transition-colors duration-300">
                    Business Consultant & Manager
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I build and refine structures that help businesses operate smoothly, scale smartly, and grow sustainably. This includes: business systems, team workflows, and operations strategy.
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    Systems & Operations
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Work Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Beyond the Work
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
              <p className="text-xl text-foreground leading-relaxed font-lato italic">
                "At the heart of everything I do is growth: the kind that begins quietly within and ripples outward into brands, businesses, and lives. I see my work as a bridge between focus and courage, structure and performance, purpose and transformation."
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I don't just build brands, I build bold minds to move boldly and rise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/services">
                  Explore My Services
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/consultation">
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
