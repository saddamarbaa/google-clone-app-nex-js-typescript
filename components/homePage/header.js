/** @format */

import Avatar from "../UI/avatar/avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";

const MainNavigation = () => {
	return (
		<header className='sticky top-0 z-50 py-5 px-5 md:px-10'>
			<nav className=' flex max-w-7xl mx-auto items-center justify-between text-gray-700'>
				<div className='flex space-x-5 items-center cursor-pointer'>
					<p className='customLink'>About</p>
					<p className='customLink '> Store</p>
				</div>
				<div className='flex space-x-10 items-center'>
					<p className='customLink hidden sm:inline'>Gmail</p>
					<p className='customLink hidden sm:inline'>Images</p>

					<ViewGridIcon className='h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer ' />

					<div className=''>
						<Avatar url='/images/saddam.jpg ' />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default MainNavigation;
