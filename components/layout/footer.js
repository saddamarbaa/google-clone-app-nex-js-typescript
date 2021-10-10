/** @format */

const Footer = () => {
	return (
		<div className='hidden xl:inline w-full sm:fixed mt-10 bottom-0 bg-gray-100  text-gray-500 text-base '>
			<div className='border-b  '>
				<div className=' py-4  px-5 lg:px-0 max-w-7xl mx-auto'>English</div>
			</div>
			<div className=' max-w-7xl mx-auto'>
				<div className='flex flex-col sm:flex-row items-center justify-between pt-5 pb-5  space-y-2'>
					<div className='customFlex '>
						<p className='hover:underline'>About</p>
						<p className='hover:underline'> Advertising</p>
						<p className='hidden '>Business</p>
						<p className='hover:underline'> How Search works</p>
					</div>
					<div className='customFlex   '>
						<p className='hover:underline'> Privacy </p>
						<p className='hover:underline'> Terms</p>
						<p className='hover:underline'> Settings</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
