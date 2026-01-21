import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
	return (
		<section className='relative min-h-screen flex items-center'>
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/placeholder.png'
					alt='Produkcja kartonów'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-foreground/60' />
			</div>

			<div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32'>
				<div className='max-w-2xl'>
					<p className='text-sm font-medium uppercase tracking-widest text-background/80 mb-4'>
						Profesjonalny producent opakowań
					</p>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance'>
						Ekologiczne opakowania kartonowe dla Twojego biznesu
					</h1>
					<p className='mt-6 text-lg text-background/90 leading-relaxed max-w-xl'>
						Tworzymy innowacyjne rozwiązania opakowaniowe, łącząc tradycję z nowoczesnością. Ponad 20
						lat doświadczenia w branży kartonowej.
					</p>
					<div className='mt-10 flex flex-col sm:flex-row gap-4'>
						<Button asChild size='lg' className='text-base'>
							<Link href='#produkty'>
								Zobacz produkty
								<ArrowRight className='ml-2 h-5 w-5' />
							</Link>
						</Button>
						<Button
							asChild
							variant='outline'
							size='lg'
							className='text-base bg-background/10 border-background/30 text-background hover:bg-background/20 hover:text-background'
						>
							<Link href='#kontakt'>Skontaktuj się</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
