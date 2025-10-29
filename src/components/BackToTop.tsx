import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BackToTopProps {
  showAfter?: number
  className?: string
}

export function BackToTop({ showAfter = 300, className }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [showAfter])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-8 right-8 z-50',
            'flex items-center justify-center',
            'w-12 h-12 rounded-full',
            'bg-blue-600 hover:bg-blue-700',
            'text-white shadow-lg hover:shadow-xl',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            'active:scale-95',
            className,
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
