import Image from 'next/image'
import React from 'react'

export default function loading() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div>
				<Image
						src="/images/svg/loading-spinner2.svg"
					alt="Loading"
					width={90}
					height={90}
				/>
			</div>
		</div>
	)
}
