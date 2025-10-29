import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { useIntersectionObserver } from '@/lib/useIntersectionObserver'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?:
    | 'fade-up'
    | 'slide-left'
    | 'slide-right'
    | 'scale'
    | 'seismic-fade'
    | 'tremor'
    | 'ripple'
    | 'earthquake'
    | 'none'
  delay?: number
  threshold?: number
  triggerOnce?: boolean
}

const animationVariants = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  'seismic-fade': {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  tremor: {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  },
  ripple: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  earthquake: {
    hidden: { opacity: 0, x: 0, rotate: 0 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
  none: {
    hidden: {},
    visible: {},
  },
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const location = useLocation()
  const [isReady, setIsReady] = useState(false)
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce,
  })

  const currentVariants = animationVariants[animation]

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  // Reset animation state on route change
  useEffect(() => {
    setIsReady(false)
    // Small delay to ensure scroll restoration completes
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      animate={isReady && isVisible ? 'visible' : 'hidden'}
      variants={currentVariants}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: 'easeOut',
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  )
}

// import { motion } from 'framer-motion'
// import type { ReactNode } from 'react'
// import { useIntersectionObserver } from '@/lib/useIntersectionObserver'
// import { cn } from '@/lib/utils'

// interface AnimatedSectionProps {
//   children: ReactNode
//   className?: string
//   animation?:
//     | 'fade-up'
//     | 'slide-left'
//     | 'slide-right'
//     | 'scale'
//     | 'seismic-fade'
//     | 'tremor'
//     | 'ripple'
//     | 'earthquake'
//     | 'none'
//   delay?: number
//   threshold?: number
//   triggerOnce?: boolean
// }

// const animationVariants = {
//   'fade-up': {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   },
//   'slide-left': {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 },
//   },
//   'slide-right': {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
//   },
//   scale: {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   },
//   'seismic-fade': {
//     hidden: { opacity: 0, y: 30, scale: 0.9 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//   },
//   tremor: {
//     hidden: { opacity: 0, x: 0 },
//     visible: { opacity: 1, x: 0 },
//   },
//   ripple: {
//     hidden: { opacity: 0, scale: 0 },
//     visible: { opacity: 1, scale: 1 },
//   },
//   earthquake: {
//     hidden: { opacity: 0, x: 0, rotate: 0 },
//     visible: { opacity: 1, x: 0, rotate: 0 },
//   },
//   none: {
//     hidden: {},
//     visible: {},
//   },
// }

// export function AnimatedSection({
//   children,
//   className,
//   animation = 'fade-up',
//   delay = 0,
//   threshold = 0.1,
//   triggerOnce = true,
// }: AnimatedSectionProps) {
//   const { ref, isVisible } = useIntersectionObserver({
//     threshold,
//     triggerOnce,
//   })

//   const currentVariants = animationVariants[animation]

//   // Check if user prefers reduced motion
//   const prefersReducedMotion = window.matchMedia(
//     '(prefers-reduced-motion: reduce)',
//   ).matches

//   return (
//     <motion.div
//       ref={ref}
//       className={cn(className)}
//       initial={prefersReducedMotion ? 'visible' : 'hidden'}
//       animate={isVisible ? 'visible' : 'hidden'}
//       variants={currentVariants}
//       transition={{
//         duration: prefersReducedMotion ? 0 : 0.7,
//         ease: 'easeOut',
//         delay: delay / 1000,
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }
