import React from 'react';

const Header = () => {
	return (
		<header className="fixed w-full top-0 left-0 z-10">
			<div className="flex justify-center bg-header">
				<a
					className="my-2"
					href="https://www.producthunt.com/posts/colorsinspo?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-colorsinspo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="h-full w-full"
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=179549&amp;theme=light"
						alt="Colorsinspo - All in one resource for finding everything about colors | Product Hunt Embed"
					/>
				</a>
			</div>
			<div className="flex justify-between items-center px-4 py-3 bg-navbar shadow-md">
				<div>
					<a href="https://colorsinspo.com">
						<img
							height="38"
							width="38"
							src="https://colorsinspo.com/resources/img/colorsinspo-mini.svg"
							alt=""
						/>
					</a>
				</div>
				<div>
					<svg
						className="fill-current"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 12H21"
							stroke="#646464"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3 6H21"
							stroke="#646464"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3 18H21"
							stroke="#646464"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</header>
	);
};

export default Header;
