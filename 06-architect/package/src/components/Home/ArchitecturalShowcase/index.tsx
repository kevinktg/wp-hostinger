'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const ArchitecturalShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // All architectural images - focusing on the extensive design collection
  const images = [
    // Hero/Exterior shots
    { src: '/images/featuredproperty/hero/hero_00.jpg', title: 'Modern Luxury Exterior', category: 'Exterior Design' },
    { src: '/images/featuredproperty/hero/hero_01.jpg', title: 'Contemporary Villa', category: 'Exterior Design' },
    { src: '/images/featuredproperty/hero/hero_02.jpg', title: 'Elegant Architecture', category: 'Exterior Design' },
    { src: '/images/featuredproperty/hero/hero_03.jpg', title: 'Premium Property', category: 'Exterior Design' },
    { src: '/images/featuredproperty/hero/hero_04.jpg', title: 'Luxury Home', category: 'Exterior Design' },
    
    // Interior
    { src: '/images/featuredproperty/living_room/living_room_01.jpg', title: 'Sophisticated Interior', category: 'Interior Design' },
    
    // Extensive design collection
    { src: '/images/featuredproperty/designs/design_0.jpg', title: 'Architectural Detail I', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_1.jpg', title: 'Modern Aesthetics', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_2.jpg', title: 'Luxury Finishes', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_3.jpg', title: 'Contemporary Style', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_4.jpg', title: 'Premium Materials', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_5.jpg', title: 'Elegant Details', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_6.jpg', title: 'Sophisticated Design', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_7.jpg', title: 'Luxury Craftsmanship', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_8.jpg', title: 'Modern Innovation', category: 'Design Portfolio' },
    { src: '/images/featuredproperty/designs/design_9.jpg', title: 'Architectural Excellence', category: 'Design Portfolio' },
    
    // General property images
    { src: '/images/featuredproperty/general/property_image_4.jpg', title: 'Property Showcase I', category: 'Portfolio' },
    { src: '/images/featuredproperty/general/property_image_5.jpg', title: 'Property Showcase II', category: 'Portfolio' },
    { src: '/images/featuredproperty/general/property_image_6.jpg', title: 'Property Showcase III', category: 'Portfolio' },
    { src: '/images/featuredproperty/general/property_image_15.jpg', title: 'Property Showcase IV', category: 'Portfolio' },
    { src: '/images/featuredproperty/general/property_image_17.jpg', title: 'Property Showcase V', category: 'Portfolio' },
    { src: '/images/featuredproperty/general/property_image_18.jpg', title: 'Property Showcase VI', category: 'Portfolio' },
    
    // Display
    { src: '/images/featuredproperty/displays/display_03.jpg', title: 'Design Display', category: 'Presentation' },
  ]

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-black">
      <div className="container max-w-[87.5rem] mx-auto px-5 2xl:px-0">
        <div className="mb-16 text-center">
          <p className="text-[#bfa77a] text-base font-semibold flex gap-2 justify-center items-center mb-4">
            <Icon icon="ph:house-simple-fill" className="text-2xl" />
            Architectural Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-[#ececec] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Luxury & Humble Designs
          </h2>
          <p className="text-[#ececec]/70 text-lg max-w-2xl mx-auto">
            Explore our collection of architectural excellence and sophisticated design elements
          </p>
        </div>

        <div className="relative">
          {/* Main Image Display */}
          <div 
            className="relative h-[600px] rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
            
            {/* Overlay with image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-[#bfa77a] text-sm font-medium mb-2">{images[currentIndex].category}</p>
              <h3 className="text-[#ececec] text-2xl font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>
                {images[currentIndex].title}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#bfa77a]/20 hover:bg-[#bfa77a]/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <Icon icon="ph:arrow-left" className="text-[#ececec] text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#bfa77a]/20 hover:bg-[#bfa77a]/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <Icon icon="ph:arrow-right" className="text-[#ececec] text-xl" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 gap-2 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-[#bfa77a] scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#bfa77a]' 
                      : 'w-2 bg-[#ececec]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchitecturalShowcase