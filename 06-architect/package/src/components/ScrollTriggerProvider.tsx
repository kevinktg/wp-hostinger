'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollTriggerProviderProps {
  children: React.ReactNode
}

export default function ScrollTriggerProvider({ children }: ScrollTriggerProviderProps) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger on route change
    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh()
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}