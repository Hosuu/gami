'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
	{ label: 'O nas', href: '#o-nas' },
	{ label: 'Produkty', href: '#produkty' },
	{ label: 'Realizacje', href: '#realizacje' },
	{ label: 'Kontakt', href: '#kontakt' },
]

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<Link href='/'>
						<Image src={'logo.svg'} height={1453} width={277} alt='logo' />
					</Link>

					<nav className='hidden md:flex items-center gap-6'>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
							>
								{item.label}
							</Link>
						))}
					</nav>

					<div className='hidden md:block'>
						<Button asChild>
							<Link href='#kontakt'>Zapytaj o ofertę</Link>
						</Button>
					</div>

					<button
						type='button'
						className='md:hidden p-2'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label='Toggle menu'
					>
						{isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
					</button>
				</div>

				{isMenuOpen && (
					<div className='md:hidden py-4 border-t border-border'>
						<nav className='flex flex-col gap-4'>
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
							<Button asChild className='mt-2 w-full'>
								<Link href='#kontakt'>Zapytaj o ofertę</Link>
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
