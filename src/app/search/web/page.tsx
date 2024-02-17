import Link from 'next/link'
export const dynamic = 'force-dynamic'

import WebSearchResult from '@/components/WebSearchResult'
import { mockedResponse } from '@/lib/mockedResponse'
import { SearchResult } from '@/types/search'

type Props = {
	searchParams: {
		searchTerm?: keyof typeof Request
		start: keyof typeof Request
	}
}

export default async function WebSearchPage({ searchParams }: Props) {
	/*
	// docs
   developers.google.com/custom-search/v1/using_rest?hl=en

	// docs for getting context key
	programmablesearchengine.google.com/controlpanel/create/congrats?cx=26d2e2b8712cb4c6c
	
	// docs for getting api key
	https://developers.google.com/custom-search/v1/introduction?hl=en#identify_your_application_to_google_with_api_key
	*/

	const startIndex = searchParams?.start || '1'
	let url = `https://www.googleapis.com/customsearch/v1?key=${
		process.env.GOOGLE_API_KEY
	}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${
		searchParams?.searchTerm || 'coding news'
	}&start=${startIndex}`

	await new Promise((resolve) => setTimeout(resolve, 2000))

	// return (
	// 	<WebSearchResult
	// 		searchTerm={searchParams.searchTerm || ''}
	// 		searchResult={mockedResponse}
	// 	/>
	// )

	const response = await fetch(url, { cache: 'no-store' })

	if (!response.ok) {
		// this will be caught by the error page and passed to the page as props
		throw new Error('Failed to fetch data')
	}

	const searchResult: SearchResult = await response.json()

	if (searchResult && !searchResult?.items?.length) {
		return (
			<div className="flex w-full flex-col items-center justify-center p-4 pb-[6rem] pt-[8rem] ">
				<div className="text-grey-900 mb-8 text-center">
					<p className="rounded border bg-white p-8 text-xl">
						Sorry, no results were found. Please try searching for something else or go to{' '}
          <Link href="/" className="cursor-pointer text-blue-500 hover:underline">
            the home page
          </Link>.
					</p>
				</div>
			</div>
		)
	}
	return (
		<WebSearchResult
			searchTerm={searchParams.searchTerm || ''}
			searchResult={searchResult || mockedResponse}
		/>
	)
}
