'use client'

import Image from 'next/image'

export function CertSection() {
	return (
		<section id='certyfikat' className='py-24 bg-background'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div>
						<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>
							Certyfikat FSC
						</h2>
						<p className='mt-6 text-muted-foreground leading-relaxed'>
							Certyfikat FSC® oznacza, że korzystamy z materiałów pochodzących z odpowiedzialnych
							źródeł, dbając o środowisko, ludzi i przyszłe pokolenia.
						</p>
					</div>

					<div className='flex justify-center'>
						<Image src={'/cert.webp'} height={1000} width={300} alt='cert' />
					</div>
				</div>
			</div>
		</section>
	)
}
