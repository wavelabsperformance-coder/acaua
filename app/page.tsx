import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { DifferentialsSection } from "@/components/home/differentials-section"
import { AboutPreviewSection } from "@/components/home/about-preview-section"
import { FeaturedPropertiesSection } from "@/components/home/featured-properties-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { MapSection } from "@/components/home/map-section"
import { BrokersCarousel } from "@/components/brokers-carousel"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCarousel />
      <DifferentialsSection />
      <AboutPreviewSection />
      <FeaturedPropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <BrokersCarousel />
      <CTASection />
      <MapSection />
    </>
  )
}