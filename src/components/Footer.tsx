'use client'
import React from 'react'
import Link from 'next/link'


import Location from './Location'



export default function Footer() {
	return (
		<div className="w-full sm:fixed mt-10 bottom-0 bg-gray-100  text-gray-500 text-base">
			<div className="border-b ">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col sm:flex-row items-center justify-between p-4 py-3">
						<div className="flex cursor-pointer items-center space-x-5">
             <Location />
						</div>
						<div className="flex cursor-pointer items-center space-x-5">
							<p className="customLink">
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
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col sm:flex-row items-center justify-between p-4 py-2">
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
	)
}
