import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use 'instant' to bypass the `scroll-behavior: smooth` set on the html
    // element in styles.css, which otherwise prevents scrollTo from working
    // on navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
