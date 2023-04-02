import React from 'react'

export default function loading() {
	const loadingItems = Array(10).fill(null) // create an array with 8 null values
	return (
		<div className="mx-auto mt-3 w-full p-5 pb-64 sm:pb-52">
			<div className="mb-20 flex flex-wrap ">
				{loadingItems.map((_, index) => (
					<div
						className="w-full animate-pulse p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
						key={index}>
						<div className="mb-4 h-64  rounded-md bg-gray-200"></div>
						<div className="mb-2.5 h-2 w-48 rounded-md bg-gray-200"></div>
						<div className="mb-2.5 h-2 w-44 rounded-md bg-gray-200"></div>
					</div>
				))}
			</div>
		</div>
	)
}
