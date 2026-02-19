import {
  Book,
  Brain,
  Crown,
  Flame,
  Hammer,
  Handshake,
  Mic,
  Palette,
  Rocket,
  Sprout,
  Star,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/community')({
  component: Community,
})

function Community() {
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
            animation="slide-left"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 font-montserrat leading-tight">
              The Quake
              <span className="block text-primary">Core</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-lato italic">
              Where bold minds grow, connect, and transform from the inside out.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Join The Community</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* What The Quake Core Represents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="slide-right" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
                What The Quake Core Represents
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            </AnimatedSection>

            <AnimatedSection animation="seismic-fade" delay={200}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-12">
                <p className="text-lg text-foreground leading-relaxed font-lato italic">
                  The Quake Core embodies the spirit of transformation,
                  creativity, and limitless growth. Just like an earthquake
                  reshapes the ground, The Quake Core exists as a community to
                  shake mindsets, stretch comfort zones, and awaken potential.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Here, we don't just talk about growth, we live it. We rise
                through collaboration, build through intention, and evolve
                through connection. We don't just gather people, we activate
                them.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12" animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <AnimatedSection animation="tremor" delay={100}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Hammer className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                      Builders
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We are builders who grow, creating something meaningful
                      from vision to reality.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="tremor" delay={200}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                      Leaders
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We are leaders who evolve, inspiring others through
                      authentic growth and purpose.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="tremor" delay={300}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                      Thinkers
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We are thinkers who create, turning ideas into innovative
                      solutions and impact.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="tremor" delay={400}>
                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-montserrat">
                      Doers
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We are doers who transform, taking bold action to create
                      real change in the world.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection
              className="text-center mb-12"
              animation="fade-up"
              delay={500}
            >
              <div className="inline-block mt-16">
                <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  We Rise Together Through:
                </h2>
                <div className="w-32 h-1 bg-primary mx-auto"></div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection animation="ripple" delay={100}>
                <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sprout className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                      Personal Growth
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Developing clarity, mindset, and resilience for continuous
                      self-improvement.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="ripple" delay={200}>
                <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                      Purposeful Creativity
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Expressing ideas that move people and create meaningful
                      impact.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="ripple" delay={300}>
                <Card className="bg-white/30 backdrop-blur-sm border-0 shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                      Intentional Connection
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Building genuine, growth-driven relationships that support
                      collective success.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Inside The Quake Core Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12" animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
                Inside The Quake Core
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every activity at The Quake Core is intentionally built to help
                members discover more purpose, build, take bold action and go
                far with like minded bold minds.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <AnimatedSection animation="scale" delay={100}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-montserrat">
                        Growth Circles
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Themed sessions focused on clarity, mindset, and purpose
                      for intentional growth.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={200}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Mic className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-montserrat">
                        Live Workshops & Conversations
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Interactive sessions for real-life transformation and
                      meaningful connection.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={300}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Handshake className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-montserrat">
                        Collaborative Opportunities
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Platforms to learn, share, and build together with
                      like-minded community members.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={400}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Book className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-montserrat">
                        Exclusive Resources
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Tools, insights, and frameworks designed specifically for
                      community members' growth.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={500}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-montserrat">
                        Accountability Family
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Support system because transformation happens faster in
                      community with shared accountability.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection
              className="text-center"
              animation="fade-up"
              delay={600}
            >
              <div className="bg-primary/5 rounded-2xl p-6 inline-block">
                <p className="text-lg text-foreground leading-relaxed">
                  Whether you are building a brand, growing a business, or
                  evolving personally, The Quake Core is your space to stay
                  aligned, inspired, and unstoppable surrounded by minds that
                  move with purpose.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Identity Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
                Our Identity
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <p className="text-xl text-foreground leading-relaxed font-lato italic mb-6">
                  "Members of The Quake Core are known as Quakestars. A
                  Quakestar is a growth-minded individual who live boldly, think
                  deeply, and move purposefully."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each Quakestar brings energy, experience, and purpose that
                  adds to the rhythm of our The Quake Core as a community.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Essence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-montserrat">
                The Essence
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                The Quake Core exists to:
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection animation="earthquake" delay={200}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Flame className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Shake Limits
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Challenge boundaries and break through self-imposed
                      limitations.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="earthquake" delay={300}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Awaken Purpose
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Discover and activate your true calling and deepest
                      motivations.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="earthquake" delay={400}>
                <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Build Growth
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Create sustainable systems and habits for continuous
                      development.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="bg-primary text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 font-montserrat">
                  Core Belief
                </h3>
                <p className="text-2xl md:text-3xl font-bold font-lato italic">
                  No limits.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center"
            animation="fade-up"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-montserrat leading-tight">
              Step into The
              <span className="block text-yellow-300">Quake Core</span>
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
              <p className="text-xl md:text-2xl leading-relaxed font-lato italic mb-6">
                "Because if you want to go fast, go alone. But if you want to go
                far, go with people who grown and growing like you."
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                This is where transformation becomes a culture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white"
              >
                <Link to="/contact">Join The Quake Core</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-primary border-3 border-secondary text-white hover:bg-white hover:text-primary px-8 py-4 text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Link to="/coaching">Explore Coaching</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
