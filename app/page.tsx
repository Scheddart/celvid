import Navbar from '@/components/Navbar'
import HeroVideo from '@/components/HeroVideo'
import dynamic from 'next/dynamic'

const BrandPalette = dynamic(() => import('@/components/BrandPalette'), { ssr: false })
const About = dynamic(() => import('@/components/About'))
const Products = dynamic(() => import('@/components/Products'))
const Services = dynamic(() => import('@/components/Services'))
const Gallery = dynamic(() => import('@/components/Gallery'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo />
      <BrandPalette />
      <About />
      <Products />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
