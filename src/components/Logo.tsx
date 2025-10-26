import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'combination' | 'mark'
  color?: 'blue' | 'black' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function Logo({
  variant = 'combination',
  color = 'blue',
  size = 'md',
  className
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  }

  // Use the provided logo assets from the DQ logo folder
  const getLogoSrc = () => {
    if (variant === 'mark') {
      switch (color) {
        case 'blue':
          return '/DQ logo/DQ logo mark/Blue/20241214_232553.png'
        case 'black':
          return '/DQ logo/DQ logo mark/Black/Black /20241213_124148.jpg'
        case 'white':
          return '/DQ logo/DQ logo mark/White/20241214_232517.jpg'
        default:
          return '/DQ logo/DQ logo mark/Blue/20241214_232553.png'
      }
    } else {
      // Combination logos
      switch (color) {
        case 'blue':
          return '/Combination - Png/Dherbie uake_20241219_152425_0000.png'
        case 'black':
          return '/Combination - Jpeg/Dherbie uake_20241219_152635_0000.jpg'
        case 'white':
          return '/Combination - Png/Dherbie uake_20241219_152426_0001.png'
        default:
          return '/Combination - Png/Dherbie uake_20241219_152425_0000.png'
      }
    }
  }

  return (
    <img
      src={getLogoSrc()}
      alt="DherbieQuake Logo"
      className={cn(
        sizeClasses[size],
        'transition-all duration-300 hover:scale-105',
        className
      )}
      style={{
        filter: variant === 'mark' && color === 'white' ? 'brightness(0) invert(1)' : undefined
      }}
    />
  )
}