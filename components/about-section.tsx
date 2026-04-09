import Image from 'next/image'

// const stats = [
// 	{ value: '15+', label: 'Lat doświadczenia' },
// 	{ value: '500+', label: 'Zadowolonych klientów' },
// 	{ value: '80M+', label: 'Wyprodukowanych kartonów' },
// 	{ value: '100%', label: 'Ekologicznych materiałów' },
// ]

export function AboutSection() {
	return (
		<section id='realizacje' className='py-24 bg-background'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div>
						<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>
							Łączymy tradycję z nowoczesną technologią
						</h2>
						<p className='mt-6 text-muted-foreground leading-relaxed'>
							Gami-Pack to polska firma z ponad 15-letnim doświadczeniem w branży opakowań kartonowych. Lata pracy na
							rynku pozwalają nam spełniać oczekiwania klientów i realizować nawet najbardziej wymagające zamówienia.
						</p>
						<p className='mt-4 text-lg italic text-muted-foreground leading-relaxed font-medium'>
							W naszej ofercie znajdują się opakowania z nadrukiem Flexo, Offset, Cyfrowym. Wykonujemy opakowania z
							tektury 3, 4, 5, 7 warstwowej. <br />
						</p>

						{/* <div className='mt-12 grid grid-cols-2 gap-6'>
							{stats.map((stat) => (
								<div key={stat.label} className='text-center p-4 rounded-lg bg-background border border-border'>
									<div className='text-3xl font-bold text-primary'>{stat.value}</div>
									<div className='text-sm text-muted-foreground mt-1'>{stat.label}</div>
								</div>
							))}
						</div>

						<div className='flex gap-4'>
							<div className='aspect-square size-full bg-red-300 grid place-items-center'>KWADRAT 1</div>
							<div className='aspect-square size-full bg-red-300 grid place-items-center'>KWADRAT 2</div>
						</div> */}
					</div>

					<div className='relative aspect-4/3 rounded-xl overflow-hidden'>
						<Image src='/images/placeholder.png' alt='Zakład produkcyjny Gami-Pack' fill className='object-cover' />
					</div>
				</div>
			</div>
		</section>
	)
}
