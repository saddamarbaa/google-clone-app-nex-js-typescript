'use client'

import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { signIn, useSession } from 'next-auth/react'
import HomeHeader from '@/components/HomeHeader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'

export default function page() {
	const { data: session } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (session) {
			router.push('/')
		}
	}, [session])

	return (
		<div className="flex min-h-screen flex-col pb-64">
			<HomeHeader />

			<div className="p-5">
				<section className="py-8 max-w-sm mx-auto w-full flex flex-col space-y-5 border border-gray-200 p-4 rounded mt-12">
					<h1 className="text-center text-3xl font-bold ">Sign In</h1>
					<Button
						color="white"
						buttonClassName="text-black font-semibold"
						onClick={() => signIn('google')}
						isLoading={false}
						Icon={FcGoogle}>
						Sign Up with Google
					</Button>
					<Button
						color="white"
						buttonClassName="text-black font-semibold"
						// onClick={handleClick}
						isLoading={false}
						Icon={BsGithub}>
						Sign Up with GitHub
					</Button>
				</section>
			</div>
		</div>
	)
}
