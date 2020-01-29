import React from 'react';

const Card = () => {
	return (
		<div className="flex justify-center items-center w-full h-64 bg-white mt-12 rounded-lg shadow-md">
			<div className="relative w-4/5 h-50">
				<div className="absolute w-full h-20 top-30 bg-indigo-500 rounded-lg" />
				<div className="absolute w-full h-20 top-20 bg-green-500 rounded-lg" />
				<div className="absolute w-full h-20 top-10 bg-yellow-500 rounded-lg" />
				<div className="absolute w-full h-20 bg-purple-500 rounded-lg" />
			</div>
		</div>
	);
};

export default Card;
