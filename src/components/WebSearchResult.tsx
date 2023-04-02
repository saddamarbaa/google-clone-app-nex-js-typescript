import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import { SearchResult } from '@/types/search'
import Pagination from './Pagantion'

type Props = {
	searchTerm: string
	searchResult: SearchResult
}

export default function WebSearchResult({ searchResult, searchTerm }: Props) {
	return (
		<div className="mx-auto mt-3 w-full max-w-7xl px-5 py-2  pb-64 sm:pb-52 sm:pl-[5%]">
			<p className="text-md mb-5 text-sm text-gray-600">
				About {searchResult?.searchInformation?.formattedTotalResults} results
				(0.3 second ) for {searchTerm}
			</p>
			<div className="flex flex-col space-y-5">
				{searchResult?.items?.map((item) => {
					return (
						<div
							className="group flex max-w-xl flex-col space-y-1"
							key={item.link}>
							<Link
								href={item?.link}
								className="cursor-pointer text-sm text-gray-500 hover:underline">
								{item?.displayLink}
							</Link>
							<Link
								className="truncate  font-semibold  text-blue-800   decoration-blue-800 group-hover:underline sm:text-xl"
								href={item.link}>
								{item?.title}
							</Link>
							<p>{Parser(item.htmlSnippet)}</p>
						</div>
					)
				})}
				<Pagination />
			</div>
		</div>
	)
}
