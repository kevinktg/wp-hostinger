import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import ArchitecturalShowcase from '@/components/Home/ArchitecturalShowcase'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ArchitecturalShowcase />
      <FeaturedProperty />
      <Testimonial />
      <BlogSmall />
      <GetInTouch />
      <FAQ />
    </main>
  )
}
