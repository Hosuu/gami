'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

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
		href: '#',
	},
]

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission
		console.log('Form submitted:', formData)
		alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.')
		setFormData({ name: '', email: '', phone: '', message: '' })
	}

	return (
		<section id='kontakt' className='py-24 bg-background'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-foreground text-balance'>
						Porozmawiajmy o Twoim projekcie
					</h2>
					<p className='mt-4 text-muted-foreground text-lg'>
						Skontaktuj się z nami, aby omówić szczegóły współpracy
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					<div>
						<h3 className='text-xl font-semibold text-foreground mb-6'>Dane kontaktowe</h3>
						<div className='space-y-6'>
							{contactInfo.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className='flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow'
								>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
										<item.icon className='h-5 w-5' />
									</div>
									<div>
										<div className='text-sm text-muted-foreground'>{item.label}</div>
										<div className='font-medium text-foreground'>{item.value}</div>
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

					<div className='p-6 rounded-xl border border-border bg-card'>
						<h3 className='text-xl font-semibold text-foreground mb-6'>Wyślij zapytanie</h3>
						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<label htmlFor='name' className='block text-sm font-medium text-foreground mb-1'>
									Imię i nazwisko
								</label>
								<Input
									id='name'
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									placeholder='Jan Kowalski'
									required
								/>
							</div>
							<div>
								<label htmlFor='email' className='block text-sm font-medium text-foreground mb-1'>
									Adres email
								</label>
								<Input
									id='email'
									type='email'
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									placeholder='jan@firma.pl'
									required
								/>
							</div>
							<div>
								<label htmlFor='phone' className='block text-sm font-medium text-foreground mb-1'>
									Telefon
								</label>
								<Input
									id='phone'
									type='tel'
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									placeholder='+48 123 456 789'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-foreground mb-1'
								>
									Wiadomość
								</label>
								<Textarea
									id='message'
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									placeholder='Opisz swoje potrzeby...'
									rows={4}
									required
								/>
							</div>
							<Button type='submit' className='w-full' size='lg'>
								Wyślij wiadomość
								<Send className='ml-2 h-4 w-4' />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
