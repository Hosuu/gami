import { Award, Leaf, Settings, Truck } from 'lucide-react'

const features = [
	{
		icon: Leaf,
		number: '1',
		title: 'Ekologiczne materiały',
		description: 'Używamy wyłącznie materiałów przyjaznych środowisku, w 100% nadających się do recyklingu.',
	},
	{
		icon: Award,
		number: '2',
		title: 'Najwyższa jakość',
		description: 'Certyfikowane procesy produkcyjne gwarantują niezmiennie wysoką jakość naszych produktów.',
	},
	{
		icon: Settings,
		number: '3',
		title: 'Personalizacja',
		description: 'Projektujemy opakowania na zamówienie, dopasowane do indywidualnych potrzeb klienta.',
	},
	{
		icon: Truck,
		number: '4',
		title: 'Szybka dostawa',
		description:
			'Sprawna logistyka i własna flota pojazdów zapewniają terminowe dostawy na terenie całego kraju.',
	},
]

export function FeaturesSection() {
	return (
		<section id='o-nas' className='py-24 bg-card'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>
						Dlaczego warto wybrać Gami-Pack?
					</h2>
					<p className='mt-4 text-muted-foreground text-lg'>
						Łączymy innowacyjność, jakość i zrównoważony rozwój
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{features.map((feature) => (
						<div
							key={feature.title}
							className='relative p-6 rounded-lg border border-border bg-background transition-shadow hover:shadow-lg'
						>
							<span className='absolute top-4 right-4 text-6xl font-bold text-neutral-300/30'>
								{feature.number}
							</span>
							<div className='relative'>
								<div className='flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4'>
									<feature.icon className='h-6 w-6' />
								</div>
								<h3 className='text-lg font-semibold text-foreground mb-2'>{feature.title}</h3>
								<p className='text-sm text-muted-foreground leading-relaxed'>
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
