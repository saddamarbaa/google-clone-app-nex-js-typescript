/** @format */

import { useRouter } from "next/router";
import {
	MicrophoneIcon,
	SearchIcon,
	ViewGridIcon,
	XIcon,
	CogIcon,
} from "@heroicons/react/solid";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import Avatar from "../UI/avatar/avatar";

const Header = () => {
	const router = useRouter();
	const inputRef = useRef(null);

	const restInput = (event) => {
		event.preventDefault();
		inputRef.current.value = "";
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const enteredInputValue = inputRef.current.value;
		if (!enteredInputValue || enteredInputValue.trim() === "") {
			return;
		}

		router.push(`/search?term=${enteredInputValue}`);
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<header className='sticky top-0 z-50 py-5 px-5 md:px-10 bg-white'>
			<nav className=' flex max-w-7xl mx-auto items-center justify-between text-gray-700'>
				<Image
					width={90}
					height={30}
					objectFit='contain'
					src='/images/googlelogo.png'
					alt='google logo'
					className='cursor-pointer'
					onClick={() => router.push("/")}
				/>
				<form
					onSubmit={handleSubmit}
					className='flex border border-gra-200 rounded-full py-3 px-6 ml-10 mr-5 max-w-[600px] flex-grow items-center shadow-sm  hover:shadow-lg focus-within:shadow-lg'>
					<input
						ref={inputRef}
						type='text'
						className='flex-grow w-full focus:outline-none'
					/>
					<XIcon
						className='h-7 text-gray-500 cursor-pointer transition duration-150 hover:scale-125 sm:mr-3'
						onClick={restInput}
					/>

					<MicrophoneIcon
						className='h-6 mr-3 hidden sm:inline text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer
						  '
					/>
					<SearchIcon
						className='h-7 hidden sm:inline text-blue-500  cursor-pointer
						  '
						onClick={handleSubmit}
					/>
				</form>

				<div className='hidden sm:inline-flex flex space-x-5 items-center cursor-pointer'>
					<CogIcon className='h-10 p-2 rounded-full  hover:bg-gray-100 cursor-pointer ' />
					<ViewGridIcon className='h-10 p-2 rounded-full  hover:bg-gray-100 cursor-pointer  ' />

					<div className=''>
						<Avatar url='/images/saddam.jpg ' />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
