import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
	return (
		<div className="flex w-full flex-col items-center justify-center p-4 pb-[6rem] pt-[8rem]  ">
			<div className="max-w-md text-center">
				<h1 className="mb-4 text-6xl">404</h1>
				<div className="text-grey-900 mb-8 text-center">
					We re sorry. The page you requested could not be found. Please go back
					to the homepage or contact us
				</div>
				<div className="flex w-full items-center justify-center">
					<Link
						href="/"
						className="flex w-full cursor-pointer  items-center justify-center rounded px-6  py-3 shadow ring-1 ring-slate-900/5 dark:bg-slate-900 sm:max-w-[150px]">
						Go back
					</Link>
				</div>
			</div>
		</div>
	)
}
