import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'combination' | 'mark'
  color?: 'blue' | 'black' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const LOGO_PATHS = {
  mark: {
    blue: '/logos/mark-blue.png',
    black: '/logos/mark-black.jpg',
    white: '/logos/mark-white.jpg',
  },
  combination: {
    blue: '/logos/combination-blue.png',
    black: '/logos/combination-black.jpg',
    white: '/logos/combination-white.png',
  },
} as const

export default function Logo({
  variant = 'combination',
  color = 'blue',
  size = 'md',
  className,
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
    xl: 'h-16 w-auto',
  }

  const logoSrc = LOGO_PATHS[variant][color]

  return (
    <img
      src={logoSrc}
      alt={variant === 'mark' ? 'DQ Logo Mark' : 'DherbieQuake Logo'}
      className={cn(
        sizeClasses[size],
        'transition-all duration-300 hover:scale-105 animate-seismic-fade-in',
        className,
      )}
      // Optional: Remove filter if you have real white assets
      // style={variant === 'mark' && color === 'white' ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  )
}
