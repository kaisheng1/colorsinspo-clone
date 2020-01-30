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
			<div className="flex justify-between items-center px-4 py-3 bg-navbar shadow-md">
				<div>
					<a href="https://colorsinspo.com">
						<img
							className="w-8 h-8"
							src="https://colorsinspo.com/resources/img/colorsinspo-mini.svg"
							alt=""
						/>
					</a>
				</div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
