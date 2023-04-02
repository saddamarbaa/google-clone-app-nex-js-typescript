'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
	error: Error | null
	rest: () => void
}

export default function ErrorPage({ error, rest }: Props) {
	useEffect(() => {
		return () => {}
	}, [error])

	return (
		<div className="mt-10  flex w-full flex-1 flex-col items-center justify-center p-4 pb-[3rem] pt-[3rem]">
			<div className="max-w-md text-center">
				<h1 className="mb-4 text-5xl">404</h1>
				<div className="text-grey-900 mb-8 text-center">
					<p>We re sorry. something when wrong, please try again later</p>
				</div>
				<div className="flex w-full items-center justify-center space-x-6">
					<Link href="/" className="w-28">
						<Button buttonClassName={'text-white'}>Go back</Button>
					</Link>
					<div className="w-28">
						<Button
							buttonClassName={'text-black'}
							type="button"
							color="gray"
							onClick={() => {
								rest()
							}}>
							Rest
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
