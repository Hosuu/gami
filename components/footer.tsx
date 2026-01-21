import Link from 'next/link'

const footerLinks = {
	firma: [
		{ label: 'O nas', href: '#o-nas' },
		{ label: 'Produkty', href: '#produkty' },
		{ label: 'Realizacje', href: '#realizacje' },
		{ label: 'Kontakt', href: '#kontakt' },
	],
	produkty: [
		{ label: 'Kartony klapowe', href: '#produkty' },
		{ label: 'Opakowania fasonowe', href: '#produkty' },
		{ label: 'Kartony z nadrukiem', href: '#produkty' },
	],
}

export function Footer() {
	return (
		<footer className='bg-primary text-primary-foreground'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='md:col-span-2'>
						<Link href='/' className='flex items-center gap-2'>
							<span className='text-xl font-bold'>Gami-Pack</span>
						</Link>
						<p className='mt-4 text-md opacity-80 max-w-md leading-relaxed'>
							ul. Poniatowskiego 2 <br />
							41-253 Czeladź <br />
							NIP 6252353072 <br />
						</p>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Firma</h4>
						<ul className='space-y-2'>
							{footerLinks.firma.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className='text-sm opacity-80 hover:opacity-100 transition-opacity'
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Produkty</h4>
						<ul className='space-y-2'>
							{footerLinks.produkty.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className='text-sm opacity-80 hover:opacity-100 transition-opacity'
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='mt-12 pt-8 border-t border-primary-foreground/20'>
					<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
						<p className='text-sm opacity-80'>
							© {new Date().getFullYear()} Gami-Pack. Wszelkie prawa zastrzeżone.
						</p>
						<div className='flex gap-6'>
							{/* <Link href='#' className='text-sm opacity-80 hover:opacity-100 transition-opacity'>
								Polityka prywatności
							</Link>
							<Link href='#' className='text-sm opacity-80 hover:opacity-100 transition-opacity'>
								Regulamin
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
