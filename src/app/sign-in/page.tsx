'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import HomeHeader from '@/components/HomeHeader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
	const { data: session } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (session) {
			router.push('/')
		}
	}, [session])

	return (
		<main className="flex min-h-screen flex-col">
			<HomeHeader />
			<div className="flex w-full  justify-center  px-5 py-24">
				<div className="items-center rounded-lg p-[100px] pt-[50px] shadow ">
					<div
						className="m-l-[1.5rem] h-[9rem] w-[9rem]"
						style={{
							position: 'relative',
							cursor: 'pointer',
						}}>
						<Image
							className="logo-img"
							src="/images/Google_2015_logo.svg.webp"
							alt="Picture of the Google"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<div>
						<h2 className="text-[1.5rem] font-bold">Sign in to Google</h2>
					</div>

					<button
						className="mt-[50px] rounded-md bg-[#0a8f48] px-4 py-4 text-xl text-white transition duration-300 hover:bg-[#075e54] "
						onClick={() => signIn('google')}>
						Sign In With Google
					</button>
				</div>
			</div>
		</main>
	)
}
