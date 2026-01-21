import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
	{
		title: 'Kartony klapowe',
		description: 'Klasyczne opakowania transportowe w różnych rozmiarach i gramaturach.',
	},
	{
		title: 'Opakowania fasonowe',
		description: 'Indywidualnie projektowane opakowania dopasowane do kształtu produktu.',
	},
	{
		title: 'Kartony z nadrukiem',
		description: 'Opakowania z pełnokolorowym nadrukiem wzmacniające wizerunek marki.',
	},
]

export function ProductsSection() {
	return (
		<section id='produkty' className='py-24 bg-background'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-2xl mx-auto mb-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>
						Nasza oferta produktowa
					</h2>
					<p className='mt-4 text-muted-foreground text-lg'>
						Szeroki wybór rozwiązań opakowaniowych dla każdej branży
					</p>
				</div>

				<div className='mt-16 grid lg:grid-cols-2 gap-12 items-center'>
					<div className='relative aspect-[4/3] rounded-xl overflow-hidden'>
						<Image
							src='/images/placeholder.png'
							alt='Produkty kartonowe'
							fill
							className='object-cover'
						/>
					</div>

					<div className='space-y-8'>
						{products.map((product, index) => (
							<div
								key={product.title}
								className='flex gap-4 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow'
							>
								<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold'>
									{index + 1}
								</div>
								<div>
									<h3 className='font-semibold text-foreground'>{product.title}</h3>
									<p className='text-sm text-muted-foreground mt-1'>{product.description}</p>
								</div>
							</div>
						))}
						<Button asChild className='mt-4'>
							<Link href='#kontakt'>
								Zapytaj o szczegóły
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
