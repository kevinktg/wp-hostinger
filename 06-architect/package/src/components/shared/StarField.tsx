'use client'
import { useEffect, useRef } from 'react'

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star properties
    const stars: Array<{
      x: number
      y: number
      z: number
      prevX: number
      prevY: number
    }> = []

    const numStars = 400
    const speed = 0.3

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 1600 - 800,
        y: Math.random() * 1600 - 800,
        z: Math.random() * 800 + 1,
        prevX: 0,
        prevY: 0
      })
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(15, 15, 35, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      stars.forEach(star => {
        // Store previous position
        star.prevX = (star.x / star.z) * centerX + centerX
        star.prevY = (star.y / star.z) * centerY + centerY

        // Move star towards viewer
        star.z -= speed

        // Reset star if it's too close
        if (star.z <= 0) {
          star.x = Math.random() * 1600 - 800
          star.y = Math.random() * 1600 - 800
          star.z = 800
        }

        // Calculate screen position
        const x = (star.x / star.z) * centerX + centerX
        const y = (star.y / star.z) * centerY + centerY

        // Calculate star size and opacity based on distance
        const size = Math.max((1 - star.z / 800) * 1.5, 0.1)
        const opacity = Math.max(1 - star.z / 800, 0.1)

        // Draw star
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        zIndex: 1
      }}
    />
  )
}

export default StarField