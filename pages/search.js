/** @format */

import Head from "next/head";
import SearchPageComponent from "../components/searchPage/search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import MainNavigation from "../components/layout/main-navigation";

const HomePage = (props) => {
	const router = useRouter();
	const { location, startDate, endDate, numberOfGuest } = router.query;
	let placeholder = ``;

	const rangeDate = `- ${startDate?.substr(0, 10)} - ${endDate?.substr(
		0,
		10,
	)}`;

	if (startDate && location && numberOfGuest && endDate) {
		placeholder = `${location} | ${rangeDate} | ${numberOfGuest} Guest`;
	}

	return (
		<Fragment>
			<Head>
				<title>Search</title>
				<meta
					name='description'
					content='Airbnb Clone build with React + Next Js.'
				/>
			</Head>
			<MainNavigation placeholder={placeholder} />
			<SearchPageComponent
				data={props?.data}
				cardData={props?.cardData}
				location={location}
				numberOfGuest={numberOfGuest}
				startDate={startDate}
				endDate={endDate}
				searchResult={props?.data}
			/>
		</Fragment>
	);
};

export async function getStaticProps(context) {
	const searchResultResponse = await fetch("https://links.papareact.com/isz");
	const data = await searchResultResponse.json();

	return {
		props: {
			data: data,
		},
	};
}

export default HomePage;
