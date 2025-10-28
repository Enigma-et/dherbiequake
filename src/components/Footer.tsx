import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-black text-white animate-seismic-fade-in delay-500">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo variant="mark" color="white" size="md" />
              <span className="text-xl font-bold font-montserrat">
                DherbieQuake
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The epicenter of positive impact, intentional growth, purpose, and
              transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dherbiequake"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aladeoluwapelumi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@dherbiequake.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Send email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/coaching"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Coaching
              </Link>
              <Link
                to="/community"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Community
              </Link>
              <Link
                to="/consultation"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Consultation
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/services/brand-strategist"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Brand Strategist
              </Link>
              <Link
                to="/services/marketing-consultant"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Marketing Consultant
              </Link>
              <Link
                to="/services/content-marketer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Content Marketer
              </Link>
              <Link
                to="/services/creative-director"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Creative Director
              </Link>
              <Link
                to="/services/business-consultant"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Business Consultant
              </Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Join The Quake Core community for growth insights and updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary h-12 md:h-10"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 md:h-10">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DherbieQuake. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-gray-400 text-center md:text-right">
            <span>Empowering ambitious minds worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
