/** @format */

import React from "react";
import Image from "next/image";
import { auth, provider } from "../../config/firebase";
import { useRouter } from "next/router";

const LogIn = () => {
	const router = useRouter();

	const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};

	return (
		<div className='grid w-full min-h-screen place-items-center '>
			<div className='p-[100px] pt-[50px] items-center rounded-lg shadow-xl'>
				<div
					className='w-[9rem] h-[9rem] m-l-[1.5rem]'
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						className='logo-img'
						src='/images/Google_2015_logo.svg.webp'
						alt='Picture of the Google'
						layout='fill'
						objectFit='contain'
					/>
				</div>
				<div>
					<h2 className='font-bold text-[1.5rem]'>Sign in to Google</h2>
				</div>

				<button
					className='mt-[50px] text-white text-xl px-4 py-4 rounded-md bg-[#0a8f48] hover:bg-[#075e54] transition duration-300 '
					onClick={signInWithGoogleHandler}>
					Sign In With Google
				</button>
			</div>
		</div>
	);
};

export default LogIn;
