import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
	{ label: 'O nas', href: '#o-nas' },
	{ label: 'Produkty', href: '#produkty' },
	{ label: 'Realizacje', href: '#realizacje' },
	{ label: 'Kontakt', href: '#kontakt' },
]

const contactInfo = [
	{
		label: 'Biuro',
		email: 'biuro@gami-pack.pl ',
		tel: '+48 666 053 734',
	},
	{
		label: 'Dział Handlowy',
		email: 'biuro@gami-pack.pl',
		tel: '+48 666 051 009',
	},
	{
		label: 'Magazyn',
		email: 'magazyn@gami-pack.pl',
		tel: '+48 664 451 890',
	},
	{
		label: 'Faktury',
		email: 'e-faktury@gami-pack.pl',
		tel: '+48 666 053 734',
	},
]

export function Footer() {
	return (
		<footer className='bg-primary text-primary-foreground'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
					<div>
						<h3 className='text-xl font-bold mb-4'>Gami-Pack</h3>
						<address className='not-italic'>
							<ul className='space-y-1'>
								<li>ul. Poniatowskiego 2</li>
								<li>41-253 Czeladź</li>
								<li className='pt-2'>NIP 6252353072</li>
							</ul>
						</address>
					</div>

					<div className='lg:order-4'>
						<h3 className='text-xl font-bold mb-4'>Firma</h3>
						<ul className='space-y-2'>
							{footerLinks.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className='inline-block hover:translate-x-1 transition-transform'
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className='col-span-2 md:order-4 lg:order-3'>
						<h3 className='text-xl font-bold mb-4'>Dane kontaktowe</h3>
						<div className='grid grid-cols-2 leading-relaxed gap-6'>
							{contactInfo.map((el) => (
								<ul key={el.label}>
									<li>
										<span className='font-semibold whitespace-nowrap'>{el.label}</span>
									</li>
									<li>
										<a href={`tel:${el.tel}`}>
											<span className='text-primary-foreground/80'>tel: </span>
											<span className='whitespace-nowrap'>{el.tel}</span>
										</a>
									</li>
									<li>
										<a href={`mailto:${el.email}`}>
											<span className='text-primary-foreground/80'>email: </span>
											<span className='whitespace-nowrap'>{el.email}</span>
										</a>
									</li>
								</ul>
							))}
						</div>
					</div>

					<div className='h-48 md:h-64  col-span-2 md:col-span-1 md:row-span-2 md:order-3 self-center lg:order-5'>
						<Image
							height={422}
							width={274}
							src={'/FSC_GAMI_W.svg'}
							alt='Certyfikat FSC'
							className='h-full w-auto object-contain m-auto lg:ml-auto'
						/>
					</div>
				</div>

				<div className='mt-12 pt-8 border-t border-primary-foreground/20'>
					<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
						<p className='text-sm '>
							© {new Date().getFullYear()} Gami-Pack. Wszelkie prawa zastrzeżone.
						</p>
						<div className='flex gap-6'>
							{/* <Link href='#' className='text-sm'>
								Polityka prywatności
							</Link>
							<Link href='#' className='text-sm'>
								Regulamin
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
