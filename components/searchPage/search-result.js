/** @format */

import Link from "next/link";

const SearchResult = ({ searchResult, term }) => {
	return (
		<div className='py-2 px-5 w-full   max-w-7xl mx-auto sm:pl-[5%] mt-3 overflow-hidden'>
			<div className='mx-auto w-full max-w-7xl ml-5 md:ml-16 '>
				<p className='text-gray-600 text-md mb-2'>
					About {searchResult?.searchInformation?.formattedTotalResults}{" "}
					results (0.3 second ) for {term}
				</p>
				{searchResult?.items?.map((item, index) => {
					return (
						<div key={index} className=''>
							<div className='max-w-xl mb-8 group'>
								<p>
									<Link href={item?.link} className='text-sml'>
										<a className='font-semibold text-blue-800 group-hover:underline'>
											{item?.formattedUrl} ❤️
										</a>
									</Link>
								</p>

								<p className='mt-2 max-w-[400px] md:max-w-[800px] '>
									{item?.snippet}
								</p>
								<p>
									<Link href={item?.link} className='text-sml'>
										<a className=' text-xl  font-semibold text-blue-800 group-hover:underline'>
											{item?.title}
										</a>
									</Link>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SearchResult;
