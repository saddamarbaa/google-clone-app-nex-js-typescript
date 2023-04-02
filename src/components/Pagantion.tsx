'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs'
import Button from './Button'

export default function Pagination() {
	const router = useRouter()
	const pathName = usePathname()
	const searchPrams = useSearchParams()
	const term = searchPrams?.get('searchTerm') || ''
	const startIndex = Number(searchPrams?.get('start') || '1')

	return (
		<div className="flex items-center space-x-8">
			<div>
				<Button
					buttonClassName={'text-white'}
					isDisabled={startIndex < 10}
					onClick={() => {
						router.push(
							`${pathName}?searchTerm=${term}&start=${startIndex - 10}`,
						)
					}}>
					<BsChevronBarLeft />
					<span className="mr-l">previous</span>
				</Button>
			</div>
			<div className="font-semibold  text-blue-800  decoration-blue-800">
				{startIndex}
			</div>

			<div>
				<Button
					buttonClassName={'text-white'}
					isDisabled={startIndex > 90}
					onClick={() => {
						router.push(
							`${pathName}?searchTerm=${term}&start=${startIndex + 10}`,
						)
					}}>
					<span className="mr-2">Next</span>
					<BsChevronBarRight />
				</Button>
			</div>
		</div>
	)
}
