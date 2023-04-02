export default function loading() {
	return (
		<div className="mx-auto mt-3 w-full max-w-7xl animate-pulse px-5  py-2 pb-64 sm:pb-52  sm:pl-[5%]">
			<div className="flex flex-col space-y-8">
				{[...Array(4)].map((_, index) => (
					<div className="max-w-3xl flex-col space-y-5" key={index}>
						<p className="mb-2 h-3 w-24 rounded-full bg-gray-200 sm:w-52"></p>
						<p className="mb-2 h-4 max-w-xs  rounded-full bg-gray-200"></p>
						<p className="mb-2 h-4 max-w-md rounded-full bg-gray-200"></p>
						<p className="mb-2 h-7 max-w-xl rounded-full  bg-gray-200"></p>
					</div>
				))}
			</div>
		</div>
	)
}
