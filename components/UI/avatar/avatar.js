/** @format */

import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../../../config/firebase";
import Image from "next/image";

const Avatar = ({ url }) => {
	const [user, loading] = useAuthState(auth);

	return (
		<Image
			src={user?.photoURL ? user?.photoURL : url}
			alt='profile image'
			width={40}
			height={40}
			className='rounded-full cursor-pointer transition duration-200 transform  '
		/>
	);
};

export default Avatar;
