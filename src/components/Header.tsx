import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-black text-white shadow-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <div className="ml-4">
          <Link to="/" className="flex items-center">
            <Logo variant="mark" color="white" size="md" />
            <span className="ml-3 text-xl font-semibold font-montserrat">
              DherbieQuake
            </span>
          </Link>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-black text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">A</span>
            <span className="font-medium">About</span>
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">S</span>
            <span className="font-medium">Services</span>
          </Link>

          <Link
            to="/coaching"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">C</span>
            <span className="font-medium">Coaching</span>
          </Link>

          <Link
            to="/community"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">Q</span>
            <span className="font-medium">Community</span>
          </Link>

          <Link
            to="/consultation"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">B</span>
            <span className="font-medium">Consultation</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors mb-2',
            }}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">@</span>
            <span className="font-medium">Contact</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
