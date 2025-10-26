import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/services/creative-director')({
  component: CreativeDirector,
})

function CreativeDirector() {
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
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <span className="text-3xl font-bold text-primary">🎨</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              Creative
              <span className="block text-primary">Director</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              I see creativity as translation turning vision into something people can feel. Every brand has a pulse, a rhythm that deserves to be heard and seen. My role as a Creative Director is to find that rhythm and express it through visuals, stories, and experiences that truly move people.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/consultation">
                Book a Consultation
              </Link>
            </Button>
          </div>
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
                  I direct with intention every visual, tone, and texture aligning with purpose. This isn't about making things look good it's about making them make sense. I begin by understanding your brand's essence: its story, purpose, and energy. From there, I lead creative execution that embodies that truth.
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
                      <span className="text-xl font-bold text-primary">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">Creative Direction & Campaign Oversight</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading the creative vision and ensuring every element aligns with the brand strategy and objectives.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">🔗</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">Brand Alignment Across All Touchpoints</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ensuring consistent brand expression across all channels, platforms, and customer interactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">📖</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">Visual Storytelling & Concept Development</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating compelling visual narratives and innovative concepts that capture attention and drive engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-montserrat">Consistent Expression Across Design, Messaging, and Experience</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Maintaining brand consistency across all creative elements while ensuring each touchpoint delivers impact.
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
                      <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">Understanding</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I begin by understanding your brand's essence: its story, purpose, and energy. This deep dive ensures every creative decision is rooted in truth.
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
                      <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">Creative Leadership</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From there, I lead creative execution that embodies that truth. I direct with intention, ensuring every detail mirrors your brand's core.
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
                      <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">Impact & Expression</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For every experience, I ensure every detail mirrors your brand's core. The result is creative work that doesn't just get attention, but creates lasting impact.
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
                "Let's create not just for attention but for expression. I see creativity as translation turning vision into something people can feel. Every brand has a pulse, a rhythm that deserves to be heard and seen."
              </blockquote>
            </div>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Ready to bring your creative vision to life?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/consultation">
                  Book a Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}