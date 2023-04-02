import { useRouter } from 'next/navigation'
import React from 'react'
import { IconType } from 'react-icons'

type Props = {
	Icon: IconType
	title: string
	selected?: boolean
}

export default function HeaderOption({ Icon, title, selected }: Props) {
	return (
		<div
			className={`flex cursor-pointer items-center space-x-1 border-b-2 border-transparent p-3 
      duration-150 hover:border-blue-500 hover:text-blue-500 ${
				selected && '!border-b-3 !border-blue-500 !text-blue-500 '
			}`}>
			<Icon className="h-4 text-base" />
			<p className="hidden text-sm sm:inline-flex"> {title}</p>
		</div>
	)
}
