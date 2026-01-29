'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

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

const prods = [
	{
		id: '01',
		label: '01 - Rolki i arkusze',
		desc: 'Rolki z tektury jedno lub dwuwarstwowej. Arkusze tekturowe służące do przekładania towaru.',
	},
	{
		id: '02',
		label: '02 - Pudełka klapowe',
		desc: 'Pudełka klapowe są zrobione z jednej części. Najczęściej klejone, mogą też być zszyte lub wzmocnione taśmą klejącą.',
	},
	{
		id: '03',
		label: '03 - Pudełka teleskopowe',
		desc: 'Pudełka składające się z więcej niż jednej części. Najczęściej wieko i spód które zachodzą na siebie.',
	},
	{
		id: '04',
		label: '04 - Pudełka składane i tace',
		desc: 'Pudełka składające się z jednej części. Po złożeniu tworzą dwie lub większą ilość ścian. Często spotykane z uchwytami lub okienkami.',
	},
	{
		id: '05',
		label: '05 - Pudełka wsuwane',
		desc: 'Pudełka składające się z większej ilości elementów. Obwoluty często służące jako komplet do innych pudeł.',
	},
	{
		id: '06',
		label: '06 - Pudełka trwale łączone',
		desc: 'Pudełka składające się z kilku elementów, które są ze sobą zszywane/sklejane przed użyciem.',
	},
	{
		id: '07',
		label: '07 - Pudełka klejone jednoczęściowe',
		desc: 'Pudełka składające się z jednej części, dostarczane w wersji złożonej. Gotowe do użycia po ich prostym rozłożeniu.',
	},
	{
		id: '08',
		label: '08 - Pudełka e-commerce z paskiem klejowym',
		desc: 'Pudełka e-commerce przyśpieszają proces pakowania. Pasek klejowy zapewnia szybkie zapakowanie produktu.',
	},
	{
		id: '09',
		label: '09 - Wypełnienia',
		desc: 'Wypełnienia umożliwiają bezpieczny transport towaru pomagając w jego zabezpieczeniu oraz unieruchomieniu.',
	},
]

const prodImageUrl = {
	'01': '/images/placeholder.png',
	'02': '/images/placeholder.png',
	'03': '/images/placeholder.png',
	'04': '/images/placeholder.png',
	'05': '/images/placeholder.png',
	'06': '/images/placeholder.png',
	'07': '/images/placeholder.png',
	'08': '/images/placeholder.png',
	'09': '/images/placeholder.png',
} as Record<string, string>

export function ProductsSection() {
	const [lastProdId, setLastProdId] = useState('01')

	return (
		<section id='produkty' className='py-24 bg-white'>
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
					<div className='relative aspect-4/3 rounded-xl overflow-hidden'>
						<Image
							src={prodImageUrl[lastProdId]}
							alt='Produkty kartonowe'
							fill
							className='object-cover'
						/>
					</div>

					<div className='space-y-8'>
						{/* {products.map((product, index) => (
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
						</Button> */}

						<Accordion
							type='single'
							defaultValue='01'
							onValueChange={(v) => {
								if (v !== '') setLastProdId(v)
							}}
						>
							{prods.map((prod) => (
								<AccordionItem value={prod.id} key={prod.id}>
									<AccordionTrigger className='data-[state=open]:text-primary data-[state=open]:font-bold'>
										{prod.label}
									</AccordionTrigger>
									<AccordionContent>{prod.desc}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	)
}
