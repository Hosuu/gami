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
				<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
					<div>
						<span className='text-xl font-bold'>Gami-Pack</span>
						<p className='mt-4 text-md  max-w-md leading-relaxed'>
							ul. Poniatowskiego 2 <br />
							41-253 Czeladź <br />
							NIP 6252353072 <br />
						</p>
					</div>

					<div className='md:col-span-2'>
						<h4 className='font-semibold mb-4'>Dane kontaktowe</h4>

						<div className='grid md:grid-cols-2 grid-rows-2 text-md max-w-md leading-relaxed gap-4'>
							{contactInfo.map((el) => (
								<ul key={el.label} className='whitespace-nowrap'>
									<li className='font-medium'> {el.label} </li>
									<li>
										tel: <a href={`tel:${el.tel}`}>{el.tel}</a>{' '}
									</li>
									<li>
										email: <a href={`mailto:${el.email}`}>{el.email}</a>
									</li>
								</ul>
							))}
						</div>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Firma</h4>
						<ul className='space-y-2'>
							{footerLinks.map((link) => (
								<li key={link.label}>
									<Link href={link.href} className='text-sm'>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className='flex justify-start'>
						<Image height={422} width={274} src={'/FSC_GAMI_W.svg'} alt='FSC' className='h-42' />
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
