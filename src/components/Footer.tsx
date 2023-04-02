'use client'
import React from 'react'
import Location from './Location'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
	const pathName = usePathname()
	
	return (
		<div className="fixed bottom-0 mt-10 w-full bg-gray-100 p-4 text-base text-gray-500">
			<div className="border-b ">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-2 pt-5 text-center sm:flex-row sm:text-left  lg:px-0">
					<Location />
					<div className="text-center">
						Check out
						<Link
							href="https://github.com/saddamarbaa/google-clone-app-nex-js-typescript"
							passHref={true}
							legacyBehavior={true}>
							<a
								target="_blank"
								className="font-bold text-blue-500 hover:underline">
								{' Github Repo'}
							</a>
						</Link>
					</div>
				</div>
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col items-center justify-between space-y-2 pb-5 pt-5  sm:flex-row">
						<div className="flex cursor-pointer items-center space-x-5">
							<p className="customLink">About</p>
							<p className="customLink"> Advertising</p>
							<p className="customLink">Business</p>
							<p className="customLink hidden sm:inline">How Search works</p>
						</div>
						<div className="flex cursor-pointer items-center space-x-5">
							<p className="customLink"> Privacy </p>
							<p className="customLink"> Terms</p>
							<p className="customLink"> Settings</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
