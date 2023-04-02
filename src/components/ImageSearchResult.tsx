/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { SearchResult } from '@/types/search'
import Pagination from './Pagantion'

type Props = {
	searchResult: SearchResult
}

export default function IMageSearchResult({ searchResult }: Props) {
	return (
		<div className="mx-auto mt-3 w-full p-5 pb-64 sm:pb-52">
			<div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{searchResult?.items?.map((item) => {
					return (
						<div key={item.link}>
							<div className="group flex max-w-xl flex-col">
								<Link href={item?.link || ''}>
									<img
										src={
											item?.link ||
											'https://tecdn.b-cdn.net/img/new/standard/city/041.webp'
										}
										className="h-60 w-full max-w-sm rounded-lg object-cover shadow-none transition-shadow duration-300 ease-in-out  group-hover:shadow-xl group-hover:shadow-black/30"
										alt={item?.title}
									/>
								</Link>
								<Link
									href={item?.image?.contextLink as string}
									className="cursor-pointer truncate  text-gray-600  group-hover:underline">
									<h2> {item?.title}</h2>
								</Link>

								<Link
									href={item?.image?.contextLink as string}
									className="cursor-pointer  truncate text-gray-600 group-hover:underline">
									<p>{item?.displayLink}</p>
								</Link>
							</div>
						</div>
					)
				})}
			</div>
			<Pagination />
		</div>
	)
}
