'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from './contact-form'

const contactInfo = [
	{
		icon: Phone,
		label: 'Telefon',
		value: 'Tel. 666 053 734',
		href: 'tel:+48666053734',
	},
	{
		icon: Mail,
		label: 'Email',
		value: 'biuro@gami-pack.pl',
		href: 'mailto:biuro@gami-pack.pl',
	},
	{
		icon: MapPin,
		label: 'Adres',
		value: 'ul. Poniatowskiego 2, 41-253 Czeladź',
		href: 'https://maps.app.goo.gl/4XiGABXZwgrWJZXe6',
		action: 'Sprawdź na Google Maps',
	},
]

export function ContactSection() {
	return (
		<section id='kontakt' className='py-24 bg-card'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>Porozmawiajmy o Twoim projekcie</h2>
					<p className='mt-4 text-muted-foreground text-lg'>Skontaktuj się z nami, aby omówić szczegóły współpracy</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 items-stretch'>
					<div>
						<h3 className='text-xl font-semibold text-foreground mb-6'>Dane kontaktowe</h3>
						<div className='space-y-6'>
							{contactInfo.map((item) => (
								<a
									key={item.label}
									href={item.href}
									target='_blank'
									className='flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow group'
								>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
										<item.icon className='h-5 w-5' />
									</div>
									<div>
										<div className='text-sm text-muted-foreground'>{item.label}</div>
										<div className='font-medium text-foreground'>{item.value}</div>
										{item.action && (
											<div className='font-medium text-sm text-primary group-hover:underline'>{item.action}</div>
										)}
									</div>
								</a>
							))}
						</div>

						<div className='mt-8 p-6 rounded-lg bg-primary text-primary-foreground'>
							<h4 className='font-semibold mb-2 flex gap-2 items-center'>Godziny pracy</h4>
							<p className='text-sm opacity-90'>Poniedziałek - Piątek: 7:00 - 15:00</p>
							<p className='text-sm opacity-90'>Sobota - Niedziela: Zamknięte</p>
						</div>
					</div>

					<div className='flex flex-col'>
						<h3 className='text-xl font-semibold text-foreground mb-6'>Wyślij zapytanie</h3>
						<div className='p-6 rounded-xl border border-border bg-card flex-1 flex flex-col'>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
