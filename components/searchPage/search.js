/** @format */
import React, { Fragment } from "react";
import Header from "./header";
import HeaderOption from "./header-options";
import SearchResult from "./search-result";

const Search = (props) => {
	return (
		<Fragment>
			<Header />
			<HeaderOption />

			<SearchResult searchResult={props?.searchResult} term={props.term} />
		</Fragment>
	);
};

export default Search;
