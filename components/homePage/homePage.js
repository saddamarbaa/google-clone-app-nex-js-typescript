/** @format */
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../../config/firebase";

const HomePageComponent = () => {
	const inputRef = useRef(null);
	const router = useRouter();

	const search = (event) => {
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
		<div className='px-5'>
			<form className='flex flex-col items-center' onSubmit={search}>
				<div className='w-[200px] h-[100px] md:w-[300px] relative mt-24  md:mt-32 flex-grow'>
					<Image
						src='/images/googlelogo_color_272x92dp.png'
						alt='Google Logo'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div className='flex w-full mt-5 shadow-sm  hover:shadow-lg focus-within:shadow-lg  max-md md:max-w-[600px] rounded-full border border-gray-200 px-5 py-3 items-center'>
					<SearchIcon className='h-5 mr-3 text-gray-500' />
					<input
						type='text'
						name=''
						id=''
						placeholder=''
						className='focus:outline-none flex-grow '
						ref={inputRef}
					/>
					<MicrophoneIcon className='h-5' />
				</div>

				<div className='flex flex-col  mt-8 w-3/4 max-w-[400px] space-y-4 justify-center sm:space-y-0 sm:flex-row sm:space-x-6'>
					<button className='customButton'>Google Search</button>
					<button className='customButton'>I'm Feeling Lucky</button>
				</div>
			</form>
		</div>
	);
};

export default HomePageComponent;
