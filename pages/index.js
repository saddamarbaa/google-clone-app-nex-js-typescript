/** @format */

import Head from "next/head";
import HomePageComponent from "../components/homePage/homePage";
import { Fragment } from "react";
import Header from "../components/homePage/header";
import Footer from "../components/layout/footer";

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Google Clone app</title>
				<meta
					name='description'
					content='Google Clone build with React + Next Js.'
				/>
			</Head>
			<Header />
			<HomePageComponent />
			<Footer />
		</Fragment>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://links.papareact.com/pyp");
	const data = await response.json();

	const cardData = await fetch("https://links.papareact.com/zp1").then(
		(response) => response.json(),
	);

	return {
		props: {
			data: data,
			cardData: cardData,
		},
	};
}

export default HomePage;
