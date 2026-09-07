'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Visi',
			href: '#visi',
		},
		{
			label: 'Misi',
			href: '#misi',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'fixed top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-full md:border md:transition-all md:ease-out md:left-1/2 md:-translate-x-1/2',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-md':
						scrolled && !open,
					'bg-background/90': open,
                    'bg-transparent md:top-6': !scrolled && !open
				},
			)}
		>
			<nav
				className={cn(
					'flex h-16 w-full items-center justify-between px-6 md:h-14 md:transition-all md:ease-out',
					{
						'md:px-4': scrolled,
					},
				)}
			>
					<a href="#beranda" className="font-serif text-xl italic font-bold tracking-wide text-foreground hover:text-primary transition-colors duration-300" onClick={() => setOpen(false)}>
					Wasiyat
				</a>

				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					<a href="https://wa.me/62812345678" className={buttonVariants({ variant: 'default', className: 'rounded-full ml-2' })}>
						Hubungi Kami
					</a>
				</div>
				<Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden p-2">
					<MenuToggleIcon open={open} className="size-6" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/95 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t md:hidden backdrop-blur-md',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-start gap-y-6 p-6 pt-10',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-lg h-12',
								})}
								href={link.href}
                                onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-4 mt-6">
						<a href="https://wa.me/62812345678" className={buttonVariants({ variant: 'default', className: 'w-full h-12 text-lg rounded-full' })}>
							Hubungi Kami
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
