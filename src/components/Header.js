import React from 'react';

import Navbar from './Navbar';

const Header = ({ className }) => {
	return (
		<header className={className}>
			<div className="flex justify-center bg-header">
				<a
					className="my-2"
					href="https://www.producthunt.com/posts/colorsinspo?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-colorsinspo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="h-full max-w-full"
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179549&amp;theme=light"
						alt="Colorsinspo - All in one resource for finding everything about colors | Product Hunt Embed"
					/>
				</a>
			</div>
			<div className="flex justify-between items-center px-4 py-3 bg-navbar shadow-md sm:px-8 lg:justify-start">
				<div>
					<a href="https://colorsinspo.com">
						<img
							className="w-8 h-8"
							src="https://colorsinspo.com/resources/img/colorsinspo-mini.svg"
							alt=""
						/>
					</a>
				</div>
				<div className="flex ml-8">
					<div className="hidden mx-8 sm:flex sm:items-center lg:order-last">
						<svg
							className="h-4 w-4 fill-current text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
						</svg>
						<input
							className="w-64 ml-4 outline-none bg-transparent focus:text-gray-700"
							placeholder="Type color hex or color name"
						/>
					</div>
					<Navbar />
				</div>
				<div className="hidden ml-auto lg:block">
					<a href="/" className="px-4 font-semibold text-gray-800 hover:text-primary">
						Our plugins
					</a>
					<a href="/" className="px-4 font-semibold text-gray-800 hover:text-primary">
						Newsletter
					</a>
					<a href="/" className="px-4 font-semibold text-gray-800 hover:text-primary">
						Tweet
					</a>
					<a href="/" className="px-4 font-semibold text-primary">
						Play color games
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
