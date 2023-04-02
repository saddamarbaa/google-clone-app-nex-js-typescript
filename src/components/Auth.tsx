'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'
import Button from './Button'

export default function Auth() {
	const { data: session } = useSession()
	return session ? (
		<div onClick={() => signOut()}>
			<Avatar url={session?.user?.image || '/images/saddam.jpg '} />
		</div>
	) : (
		<div className="w-fit">
			<Link href="/sign-in">
				<Button>Sign In</Button>
			</Link>
		</div>
	)
}
