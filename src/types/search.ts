interface GoogleCustomSearchResult {
	kind: string
	title: string
	htmlTitle: string
	link: string
	displayLink: string
	snippet: string
	htmlSnippet: string
	cacheId: string
	formattedUrl: string
	htmlFormattedUrl: string
	pagemap: {
		cse_thumbnail: {
			src: string
			width: string
			height: string
		}[]
		metatags: {
			[key: string]: string
		}[]
		website?: {
			name: string
			image: string
			description: string
			url: string
		}[]
		cse_image: {
			src: string
		}[]
	}
	mime?: string
	fileFormat?: string
	image?: {
		contextLink: string
		height: number
		width: number
		byteSize: number
		thumbnailLink: string
		thumbnailHeight: number
		thumbnailWidth: number
	}
}

export interface SearchResult {
	kind: string
	url: {
		type: string
		template: string
	}
	queries: {
		request: {
			title: string
			totalResults: string
			searchTerms: string
			count: number
			startIndex: number
			inputEncoding: string
			outputEncoding: string
			safe: string
			cx: string
		}[]
		nextPage?: {
			title: string
			totalResults: string
			searchTerms: string
			count: number
			startIndex: number
			inputEncoding: string
			outputEncoding: string
			safe: string
			cx: string
		}[]
	}
	context: {
		title: string
	}
	searchInformation: {
		searchTime: number
		formattedSearchTime: string
		totalResults: string
		formattedTotalResults: string
	}
	items: GoogleCustomSearchResult[]
}
