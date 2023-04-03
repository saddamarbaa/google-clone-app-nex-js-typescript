'use client'

import Button from '@/components/Button'
import HomeHeader from '@/components/HomeHeader'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiMicrophone } from 'react-icons/hi'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const [searchTerm, setSearchTerm] = useState<string | ''>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const router = useRouter()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (searchTerm && searchTerm.trim()) {
			router.push(`/search/web?searchTerm=${searchTerm}`)
			setSearchTerm('')
		}
	}

	const randomSearch = async () => {
		setIsLoading(true)
		const response: string = await fetch(
			'https://random-word-api.herokuapp.com/word',
		)
			.then((res: Response) => res.json())
			.then((data: string[]) => {
				setIsLoading(false)
				return data[0]
			})

		if (response) {
			router.push(`/search/web?searchTerm=${response}`)
			setSearchTerm('')
		}
	}
	return (
		<main className="flex min-h-screen flex-col">
			<HomeHeader />
			<div className="flex-1 px-5">
				<form className="flex flex-col items-center" onSubmit={handleSubmit}>
					<div className="relative mt-28">
						<Image
							src="/images/googlelogo_color_272x92dp.png"
							alt="Google Logo"
							width={250}
							height={100}
						/>
					</div>

					<div className="max-md mt-5 flex w-full items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow hover:border-gray-300  hover:shadow md:max-w-[650px]">
						<AiOutlineSearch className="mr-3 cursor-pointer text-xl text-gray-500 transition duration-150 ease-in-out" />
						<input
							type="text"
							name=""
							id=""
							placeholder=""
							className="flex-grow focus:outline-none"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<HiMicrophone className="h-5" />
					</div>

					<div className="mt-8 flex  w-3/4 max-w-[400px] flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
						<div className="sm:fit w-full">
							<Button
								type="submit"
								buttonClassName={'text-black'}
								color="gray"
								size="large"
								isDisabled={!searchTerm}>
								Google Search
							</Button>
						</div>
						<div className="sm:fit w-full">
							<Button
								buttonClassName={'text-black'}
								type="button"
								color="gray"
								size="large"
								isDisabled={isLoading}
								isLoading={isLoading}
								onClick={randomSearch}>
								Im Feeling Lucky
							</Button>
						</div>
					</div>
				</form>
			</div>
		</main>
	)
}
