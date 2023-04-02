import Image from 'next/image'
import React from 'react'

export default function Avatar({ url }: { url: string }) {
	return (
		<Image
			src={url}
			alt="profile image"
			width={40}
			height={40}
			className="transform cursor-pointer rounded-full transition duration-200  "
		/>
	)
}
