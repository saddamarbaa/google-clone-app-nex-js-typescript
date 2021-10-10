/** @format */

import { Fragment } from "react";

import Footer from "./footer";

function Layout(props) {
	return (
		<Fragment>
			<main>{props.children}</main>
		</Fragment>
	);
}

export default Layout;
