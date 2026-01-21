import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProductsSection } from '@/components/products-section'

export default function HomePage() {
	return (
		<main>
			<Header />
			<HeroSection />
			<FeaturesSection />
			<ProductsSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</main>
	)
}
