/** @format */

import {
	MapIcon,
	PhotographIcon,
	PlayIcon,
	SearchIcon,
	DotsVerticalIcon,
	NewspaperIcon,
} from "@heroicons/react/outline";

import HeaderOption from "./header-option";
const HeaderOptions = () => {
	return (
		<>
			<div className='flex space-x-6 items-center py-2 px-5 w-full  text-gray-700 justify-around max-w-7xl mx-auto'>
				<div></div>
				<div className='flex space-x-6 items-center '>
					<HeaderOption Icon={SearchIcon} title='All' selected />
					<HeaderOption Icon={PhotographIcon} title='Images' />
					<HeaderOption Icon={PlayIcon} title='Videos' />
					<HeaderOption Icon={NewspaperIcon} title='News' />
					<HeaderOption Icon={MapIcon} title='Maps' />
					<HeaderOption Icon={DotsVerticalIcon} title='More' />
				</div>

				<p className='hidden xl:inline-flex'>Tools</p>

				<p> SafeSearch on</p>
			</div>
			<div className=' w-full  border-t'></div>
		</>
	);
};

export default HeaderOptions;
