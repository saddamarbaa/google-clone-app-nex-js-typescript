/** @format */

import Head from "next/head";
import SearchPageComponent from "../components/searchPage/search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import response from "../lib/response";

const SearchPage = (props) => {
	const router = useRouter();

	return (
		<Fragment>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<meta
					name='description'
					content='Airbnb Clone build with React + Next Js.'
				/>
			</Head>

			<SearchPageComponent
				searchResult={props?.data}
				term={router.query.term}
			/>
		</Fragment>
	);
};

export async function getServerSideProps(context) {
	// Google Api key
	// https://developers.google.com/custom-search/v1/using_rest

	// Context key
	// https://cse.google.com/create/new

	const searchResultResponse = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`,
	);

	const data = await searchResultResponse.json();

	return {
		props: {
			data: data,
		},
	};
}

export default SearchPage;
