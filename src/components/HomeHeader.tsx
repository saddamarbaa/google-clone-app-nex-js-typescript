

import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

import Auth from './Auth'

export default function HomeHeader() {
	return (
		<header className="sticky top-0 z-50 px-5 py-5 md:px-10">
			<nav className="mx-auto flex max-w-7xl items-center justify-end space-x-10 text-gray-700">
				<Link
					href={'https://mail.google.com'}
					className="customLink hidden sm:inline">
					Gmail
				</Link>
				<Link
					href={'https://www.google.co.id/imghp?hl=en&ogbl'}
					className="customLink hidden sm:inline">
					Images
				</Link>
				<TbGridDots className="cursor-pointer rounded-full bg-transparent text-4xl transition duration-150 hover:bg-gray-200" />

				<Auth />
			</nav>
		</header>
	)
}
