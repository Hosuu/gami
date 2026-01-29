'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop({
	minHeight,
	scrollTo,
	...props
}: React.ComponentProps<typeof Button> & { minHeight?: number; scrollTo?: number }) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(document.documentElement.scrollTop >= (minHeight ?? 0))
		}

		onScroll()
		document.addEventListener('scroll', onScroll)

		return () => document.removeEventListener('scroll', onScroll)
	}, [minHeight])

	return (
		<Button
			onClick={() =>
				window.scrollTo({
					top: scrollTo ?? 0,
					behavior: 'smooth',
				})
			}
			size={'icon-lg'}
			className={cn(
				'w-12 h-12 fixed right-8 bottom-8 border border-secondary',
				visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
				'transition-opacity duration-300 ease-out'
			)}
			{...props}
		>
			<ChevronUp className='size-8' />
		</Button>
	)
}
