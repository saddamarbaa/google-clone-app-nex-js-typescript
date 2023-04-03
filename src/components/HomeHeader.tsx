import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

import Auth from './Auth'
import Logo from './Logo'

export default function HomeHeader() {
	return (
		<header className="sticky top-0 z-50  bg-white py-5">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-5  text-gray-700 md:px-10">
				<Logo />

				<div className="items-center justify-end space-x-10 text-gray-700 w-full flex">
					<Link
						href={'https://mail.google.com'}
						className="customLink hidden md:inline">
						Gmail
					</Link>
					<Link
						href={'https://www.google.co.id/imghp?hl=en&ogbl'}
						className="customLink hidden md:inline">
						Images
					</Link>
					<TbGridDots className="cursor-pointer rounded-full bg-transparent text-4xl transition duration-150 hover:bg-gray-200 hidden md:inline" />
					<Auth />
				</div>
			</nav>
		</header>
	)
}
