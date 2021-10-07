/** @format */

import { Fragment } from "react";

import Footer from "./footer";
import MainNavigation from "./main-navigation";

function Layout(props) {
	return (
		<fragment>
			<MainNavigation />
			<main>{props.children}</main>
			<Footer />
		</fragment>
	);
}

export default Layout;
