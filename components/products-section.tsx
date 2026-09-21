'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const products = {
	'01': {
		id: '01',
		label: '01 - Rolki i arkusze',
		imageUrl: '/images/gp01.jpg',
		desc: 'Rolki z tektury jedno lub dwuwarstwowej. Arkusze tekturowe służące do przekładania towaru.',
	},
	'02': {
		id: '02',
		label: '02 - Pudełka klapowe',
		imageUrl: '/images/gp02.jpg',
		desc: 'Pudełka klapowe są zrobione z jednej części. Najczęściej klejone, mogą też być zszyte lub wzmocnione taśmą klejącą.',
	},
	'03': {
		id: '03',
		label: '03 - Pudełka teleskopowe',
		imageUrl: '/images/gp04.jpg',
		desc: 'Pudełka składające się z więcej niż jednej części. Najczęściej wieko i spód które zachodzą na siebie.',
	},
	'04': {
		id: '04',
		label: '04 - Pudełka składane i tace',
		imageUrl: '/images/gp08.jpg',
		desc: 'Pudełka składające się z jednej części. Po złożeniu tworzą dwie lub większą ilość ścian. Często spotykane z uchwytami lub okienkami.',
	},
	'05': {
		id: '05',
		label: '05 - Pudełka wsuwane',
		imageUrl: '/images/gp09.jpg',
		desc: 'Pudełka składające się z większej ilości elementów. Obwoluty często służące jako komplet do innych pudeł.',
	},
	'06': {
		id: '06',
		label: '06 - Pudełka trwale łączone',
		imageUrl: '/images/gp10.jpg',
		desc: 'Pudełka składające się z kilku elementów, które są ze sobą zszywane/sklejane przed użyciem.',
	},
	'07': {
		id: '07',
		label: '07 - Pudełka klejone jednoczęściowe',
		imageUrl: '/images/gp11.jpg',
		desc: 'Pudełka składające się z jednej części, dostarczane w wersji złożonej. Gotowe do użycia po ich prostym rozłożeniu.',
	},
	'08': {
		id: '08',
		label: '08 - Pudełka e-commerce z paskiem klejowym',
		imageUrl: '/images/gp01.jpg',
		desc: 'Pudełka e-commerce przyśpieszają proces pakowania. Pasek klejowy zapewnia szybkie zapakowanie produktu.',
	},
	'09': {
		id: '09',
		label: '09 - Wypełnienia',
		imageUrl: '/images/gp02.jpg',
		desc: 'Wypełnienia umożliwiają bezpieczny transport towaru pomagając w jego zabezpieczeniu oraz unieruchomieniu.',
	},
}

export function ProductsSection() {
	const [selectedProductId, setSelectedProductId] = useState<keyof typeof products>('01')
	const [rotateProducts, setRotateProducts] = useState<boolean>(true)

	useEffect(() => {
		if (!rotateProducts) return

		const ids = Object.keys(products) as (keyof typeof products)[]
		let index = ids.indexOf(selectedProductId)

		const interval = setInterval(() => {
			index = (index + 1) % ids.length
			setSelectedProductId(ids[index])
		}, 2000)

		return () => clearInterval(interval)
	}, [setSelectedProductId, rotateProducts, selectedProductId])

	const handleProductChange = (value: keyof typeof products) => {
		setRotateProducts(false)
		setSelectedProductId(value)
	}

	return (
		<section id='produkty' className='py-24 bg-white'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-2xl mx-auto mb-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>Nasza oferta produktowa</h2>
					<p className='mt-4 text-muted-foreground text-lg'>Szeroki wybór rozwiązań opakowaniowych dla każdej branży</p>
				</div>

				<div className='mt-16 grid lg:grid-cols-2 gap-12 items-center'>
					<div className='relative aspect-4/3 rounded-xl overflow-hidden'>
						<Image src={products[selectedProductId].imageUrl} alt='Produkty kartonowe' fill className='object-cover' />
					</div>

					<Accordion
						type='single'
						value={selectedProductId}
						onValueChange={(v: keyof typeof products) => handleProductChange(v)}
					>
						{Object.values(products).map((prod) => (
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
		</section>
	)
}
