'use client'

import React, { useState } from 'react'
import { TbGridDots } from 'react-icons/tb'
import { BsSearch } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'
import { useRouter, useSearchParams } from 'next/navigation'
import { RiImageFill } from 'react-icons/ri'

import SearchHeaderOptions from './SearchHeaderOptions'
import Auth from './Auth'
import Logo from './Logo'

export default function SearchHeader() {
	const router = useRouter()
	const searchPrams = useSearchParams()
	const term = searchPrams?.get('searchTerm') || ''
	const [searchTerm, setSearchTerm] = useState<string | ''>(term || '')

	const handleReset = () => {
		setSearchTerm(() => '')
	}

	const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault()
		if (searchTerm && searchTerm.trim()) {
			router.push(`/search/web?searchTerm=${searchTerm}`)
			// setSearchTerm('')
		}
	}

	return (
		<header className="sticky top-0 z-50  bg-white py-5">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-5  text-gray-700 md:px-10">
				<Logo />
				<form
					onSubmit={handleSubmit}
					className="ml-10 mr-5 flex max-w-[650px] flex-grow cursor-pointer items-center rounded-full border border-gray-200 px-6 py-3 caret-blue-500 shadow-sm transition  duration-100 ease-in-out focus-within:shadow-lg hover:shadow-lg">
					{searchTerm ? (
						<span>
							<BsSearch
								className="mr-4 cursor-pointer text-blue-600"
								onClick={(e) => handleSubmit()}
							/>
						</span>
					) : null}

					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						type="text"
						className="w-full flex-grow focus:outline-none"
					/>
					<div className="flex items-center space-x-3">
						{searchTerm ? (
							<AiOutlineClose
								className="hidden cursor-pointer text-blue-500 transition duration-150 hover:scale-125 md:inline"
								onClick={handleReset}
							/>
						) : null}

						<div className="hidden h-6 border-l-2 border-gray-300 md:inline"></div>
						<BiMicrophone className="hidden cursor-pointer text-blue-500 md:inline" />
						<RiImageFill className="hidden cursor-pointer text-blue-500 lg:inline" />

						{!searchTerm ? (
							<BsSearch className="cursor-pointer text-blue-500" />
						) : null}
					</div>
				</form>

				<div className="hidden cursor-pointer items-center space-x-5 sm:inline-flex">
					<FiSettings className="hidden cursor-pointer rounded-full bg-transparent p-2 text-4xl transition duration-150  hover:bg-gray-200 lg:inline" />
					<TbGridDots className="cursor-pointer rounded-full bg-transparent p-2 text-4xl transition duration-150 hover:bg-gray-200" />

					<Auth />
				</div>
			</nav>
			<SearchHeaderOptions />
		</header>
	)
}
