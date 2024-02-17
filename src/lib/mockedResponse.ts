import { SearchResult } from '@/types/search'

export const mockedResponse: SearchResult = {
	kind: 'customsearch#search',
	url: {
		type: 'application/json',
		template:
			'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
	},
	queries: {
		request: [
			{
				title: 'Google Custom Search - he',
				totalResults: '9',
				searchTerms: 'he',
				count: 9,
				startIndex: 1,
				inputEncoding: 'utf8',
				outputEncoding: 'utf8',
				safe: 'off',
				cx: 'bce30d98013df9990',
			},
		],
	},
	context: {
		title: 'Google',
	},
	searchInformation: {
		searchTime: 0.757976,
		formattedSearchTime: '0.76',
		totalResults: '9',
		formattedTotalResults: '9',
	},
	items: [
		{
			kind: 'customsearch#result',
			title: 'Learn JavaScript Online JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://www.forbes.com/sites/forbestechcouncil/2019/02/22/want-to-learn-coding-check-out-these-resources-recommended-by-tech-experts/',
				height: 640,
				width: 640,
				byteSize: 103451,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPm6l9Xo2ErGXpzBnY4cypeOyiLHGH5W4mNeVryuX93a5s9WHsQ9cQxWSN&s',
				thumbnailHeight: 137,
				thumbnailWidth: 137,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://theconversation.com/topics/coding-5877',
				height: 324,
				width: 668,
				byteSize: 36016,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96ryj60m-THfu64aPiBM79qMUxSyTtl4d5usfFJbpYs9zu6uv0y8C8A&s',
				thumbnailHeight: 67,
				thumbnailWidth: 138,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://www.hp.com/us-en/shop/tech-takes/best-coding-programs',
				height: 851,
				width: 1890,
				byteSize: 288086,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo85khkctsr7CMLycLkvuH3xIQh9M3JUVW9hZjw2C03-qF4u4x8dkXlw&s',
				thumbnailHeight: 68,
				thumbnailWidth: 150,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://woz-u.com/blog/the-evolution-of-coding-what-programming-languages-are-prominent-today/',
				height: 1440,
				width: 2560,
				byteSize: 637729,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CxhHVqIYdYaV_hHN_FuHx277lmOsuJPh_xIKVFBVNkiZXB1PBD2ZvQ&s',
				thumbnailHeight: 84,
				thumbnailWidth: 150,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://www.elevenfifty.org/blog/coders-great-business',
				height: 325,
				width: 600,
				byteSize: 28845,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIENz0hiVomlF1sUM7X_4DRiSzuPICHr-_RLYnq62IAsVjM50b0u34_Q&s',
				thumbnailHeight: 73,
				thumbnailWidth: 135,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://www.goldmansachs.com/insights/pages/the-future-of-coding-is-conversation.html',
				height: 450,
				width: 800,
				byteSize: 162337,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWogQ21SsZ36GGhxiAoPOH43acQs-G4Z8t2_maYXnkgC66o5ABUAOTiZg&s',
				thumbnailHeight: 80,
				thumbnailWidth: 143,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://images.theconversation.com/files/479421/original/file-20220816-10908-uvh62x.jpg?ixlib=rb-1.1.0&rect=4%2C5%2C994%2C497&q=45&auto=format&w=668&h=324&fit=crop',
			displayLink: 'theconversation.com',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://cms-assets.themuse.com/media/lead/_800x418_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://www.scmagazine.com/resource/application-security/secure-coding-helping-developers-in-the-right-places',
				height: 1316,
				width: 1500,
				byteSize: 684147,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4ijwmrQa_LgpDEqbh7wkLzYuvNQiINbhoOddVqAZFOw8a8sxhi-eAi0&s',
				thumbnailHeight: 132,
				thumbnailWidth: 150,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink:
					'https://www.themuse.com/advice/10-free-classes-to-learn-to-code-if-you-have-absolutely-no-idea-where-to-start',
				height: 418,
				width: 800,
				byteSize: 67050,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHcAqEkzp5AbT8KZzxF5Bv6PZj-B0p1DTbp3w0nmvKWuYewhVrGsEVw&s',
				thumbnailHeight: 75,
				thumbnailWidth: 143,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
		{
			kind: 'customsearch#result',
			title: 'JavaScript - Wikipedia',
			htmlTitle: '<b>JavaScript</b> - Wikipedia',
			link: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png',
			displayLink: 'en.wikipedia.org',
			snippet: 'JavaScript - Wikipedia',
			htmlSnippet: '<b>JavaScript</b> - Wikipedia',
			mime: 'image/png',
			fileFormat: 'image/png',
			image: {
				contextLink: 'https://en.wikipedia.org/wiki/JavaScript',
				height: 587,
				width: 882,
				byteSize: 102913,
				thumbnailLink:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3hetO90D4FAi-aqrztwFL0ZE22ogw8pgsHLdKNDLtAmhgsuGQE66_04&s',
				thumbnailHeight: 97,
				thumbnailWidth: 146,
			},
			cacheId: 'kVQng67g-kIJ',
			formattedUrl:
				'https://www.google.com/maps/search/?api=1&query...query...id...',
			htmlFormattedUrl:
				'https://www.google.com/maps/search/?api=1&amp;query...query...id...',
			pagemap: {
				cse_thumbnail: [
					{
						src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
						width: '204',
						height: '247',
					},
				],
				metatags: [
					{
						referrer: 'origin',
						'twitter:card': 'summary',
						'theme-color': '#3367d6',
						viewport: 'initial-scale=1.0, user-scalable=no',
						google: 'notranslate',
					},
				],
				cse_image: [
					{
						src: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
					},
				],
			},
		},
	],
}
