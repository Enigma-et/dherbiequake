import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="md:p-4 flex items-center justify-between bg-primary text-white shadow-lg animate-seismic-fade-in sticky top-0 z-200 h-16">
        <div className="flex items-center justify-between w-full">
          <div className="ml-4 md:ml-0">
            <Link to="/" className="flex items-center">
              <Logo variant="mark" color="blue" size="md" />
              <span className="ml-3 text-xl font-semibold font-montserra">
                DherbieQuake
              </span>
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors hover:animate-tremor-once md:hidden touch-target"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            Services
          </Link>
          <Link
            to="/coaching"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            Coaching
          </Link>
          <Link
            to="/community"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            Community
          </Link>
          <Link
            to="/consultation"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            Consultation
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors font-medium"
            activeProps={{ className: 'text-primary font-medium' }}
          >
            Contact
          </Link>
        </nav>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-full mt-16 bg-primary text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false)
        }}
      >
        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
              A
            </span>
            <span className="font-medium">About</span>
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
              S
            </span>
            <span className="font-medium">Services</span>
          </Link>

          <Link
            to="/coaching"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
              C
            </span>
            <span className="font-medium">Coaching</span>
          </Link>

          <Link
            to="/community"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
              Q
            </span>
            <span className="font-medium">Community</span>
          </Link>

          <Link
            to="/consultation"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
              B
            </span>
            <span className="font-medium">Consultation</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            // activeProps={{
            //   className:
            //     'flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-background/90 transition-colors mb-2',
            // }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
              @
            </span>
            <span className="font-medium">Contact</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
