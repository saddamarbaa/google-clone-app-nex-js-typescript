'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Logo() {
	const pathName = usePathname()

	return pathName !== '/' ? (
		<Link href="/">
			<Image
				width={100}
				height={35}
				src="/images/googlelogo.png"
				alt="google logo"
				className="cursor-pointer"
			/>
		</Link>
	) : null
}
