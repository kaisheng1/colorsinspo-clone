import React, { useState } from 'react';

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toogleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="">
			<svg
				onClick={toogleOpen}
				className="w-6 h-6 fill-current text-primary"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3 12H21" stroke="#646464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3 6H21" stroke="#646464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3 18H21" stroke="#646464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			{isOpen && (
				<div className="absolute top-32 right-0 w-64 bg-navbar">
					<div className="flex justify-between px-8 py-4 border-l-8 border-primary bg-blue-100">
						<span className="-ml-2 font-semibold text-primary">Color Palettes</span>
						<svg
							className="w-6 h-6 fill-current text-primary"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4 3H10C10.5523 3 11 3.44772 11 4V8C11 8.55228 10.5523 9 10 9H4C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3ZM5 7H9V5H5V7ZM10 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V12C11 11.4477 10.5523 11 10 11ZM5 19H9V13H5V19ZM20 15H14C13.4477 15 13 15.4477 13 16V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V16C21 15.4477 20.5523 15 20 15ZM15 19H19V17H15V19ZM20 3H14C13.4477 3 13 3.44772 13 4V12C13 12.5523 13.4477 13 14 13H20C20.5523 13 21 12.5523 21 12V4C21 3.44772 20.5523 3 20 3ZM15 11H19V5H15V11Z"
							/>
						</svg>
					</div>
					<div className="flex justify-between px-8 py-4">
						<span className="font-semibold">Color Tools</span>
						<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19.7089 3.28939L20.709 4.28729C20.9063 4.48528 21.0115 4.75674 20.999 5.03571V6.16334C20.9979 6.42513 20.8937 6.676 20.709 6.86187L17.2288 10.3346L18.6489 11.7416C18.8394 11.9356 18.8394 12.2461 18.6489 12.4401L17.9388 13.1486C17.8449 13.2431 17.7171 13.2962 17.5838 13.2962C17.4505 13.2962 17.3227 13.2431 17.2288 13.1486L16.5287 12.4401L8.82825 20.1239C8.45243 20.5012 7.94125 20.7131 7.40817 20.7127C7.19033 20.7103 6.97428 20.6732 6.76813 20.6029L5.30804 20.104L4.55799 20.8524C4.46411 20.9469 4.3363 21 4.20297 21C4.06965 21 3.94184 20.9469 3.84795 20.8524L3.14791 20.1539C3.05325 20.0602 3 19.9327 3 19.7996C3 19.6666 3.05325 19.5391 3.14791 19.4454L3.89795 18.6969L3.39792 17.24C3.15201 16.5195 3.3382 15.7222 3.87795 15.1843L11.5784 7.50052L10.8684 6.80199C10.7737 6.70831 10.7205 6.58078 10.7205 6.44774C10.7205 6.3147 10.7737 6.18717 10.8684 6.09349L11.5784 5.38498C11.7729 5.19481 12.084 5.19481 12.2785 5.38498L13.6886 6.80199L17.1688 3.28939C17.355 3.10503 17.6064 3.0011 17.8688 3H19.0089C19.2712 3.0011 19.5226 3.10503 19.7089 3.28939ZM5.39807 16.4816L7.5282 18.6071L15.1087 11.0231L12.9985 8.93749L5.39807 16.4816Z"
							/>
						</svg>
					</div>
					<div className="flex justify-between px-8 py-4">
						<span className="font-semibold">Gradients</span>
						<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM19 5V12H17V10.25C17 10.1119 16.8881 10 16.75 10H15.25C15.1119 10 15 10.1119 15 10.25V12H13V10.25C13 10.1119 12.8881 10 12.75 10H11.25C11.1119 10 11 10.1119 11 10.25V12H9V10.25C9 10.1119 8.88807 10 8.75 10H7.25C7.11193 10 7 10.1119 7 10.25V12H5V5H19ZM7 12V14H9V12H7ZM11 12V14H13V12H11ZM15 12V14H17V12H15Z"
							/>
						</svg>
					</div>
					<div className="flex justify-between px-8 py-4">
						<span className="font-semibold">Brand Colors</span>
						<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.5 10.9C16.822 10.3181 16.9939 9.66505 17 9V8C17 5.79086 15.2091 4 13 4H7C6.44772 4 6 4.44772 6 5V18C6 18.5523 6.44772 19 7 19H14C16.2091 19 18 17.2091 18 15V14C17.9932 12.7933 17.442 11.6542 16.5 10.9ZM13 7C13.5523 7 14 7.44772 14 8V9C14 9.55228 13.5523 10 13 10H9V7H13ZM14 16C14.5523 16 15 15.5523 15 15V14C15 13.4477 14.5523 13 14 13H9V16H14Z"
							/>
						</svg>
					</div>
					<div className="flex justify-between px-8 py-4">
						<span className="font-semibold">Solid Colors</span>
						<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2 12.55V14.31C2.00035 14.7077 2.15862 15.089 2.44 15.37L8.63 21.56C8.91103 21.8414 9.29231 21.9996 9.69 22H10.45C10.8477 21.9996 11.229 21.8414 11.51 21.56L19.84 13.23C20.2277 12.84 20.2277 12.21 19.84 11.82L10.19 2.15C10.0946 2.05428 9.96513 2.00033 9.83 2C9.69812 2.00188 9.57232 2.05579 9.48 2.15L8.77 2.85C8.57822 3.04781 8.57822 3.36219 8.77 3.56L9.57 4.36L2.44 11.49C2.15862 11.771 2.00035 12.1523 2 12.55ZM11 5.78L17.19 12H4.76L11 5.78ZM19.54 16H19.48C19.3793 15.9968 19.2829 16.0413 19.22 16.12C19.1899 16.1529 19.1587 16.1868 19.1266 16.2219C18.3467 17.0718 17 18.5396 17 19.5C17 20.8807 18.1193 22 19.5 22C20.8807 22 22 20.8807 22 19.5C22 18.5838 20.7064 17.1431 19.9251 16.2731C19.8707 16.2125 19.8188 16.1547 19.77 16.1C19.7095 16.0377 19.6268 16.0018 19.54 16Z"
							/>
						</svg>
					</div>
					<div className="flex justify-between px-8 py-4">
						<span className="font-semibold">Daily Reads</span>
						<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M20.5 6H21.5C21.7761 6 22 6.22386 22 6.5V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V17C18 17.5523 18.4477 18 19 18C19.5523 18 20 17.5523 20 17V6.5C20 6.22386 20.2239 6 20.5 6ZM4 17C4 17.5523 4.44772 18 5 18H16.18C16.0636 17.6793 16.0027 17.3411 16 17V6H4V17ZM13.5 8H6.5C6.22386 8 6 8.22386 6 8.5V11.5C6 11.7761 6.22386 12 6.5 12H13.5C13.7761 12 14 11.7761 14 11.5V8.5C14 8.22386 13.7761 8 13.5 8ZM6.5 14H13.5C13.7761 14 14 14.2239 14 14.5V15.5C14 15.7761 13.7761 16 13.5 16H6.5C6.22386 16 6 15.7761 6 15.5V14.5C6 14.2239 6.22386 14 6.5 14Z"
							/>
						</svg>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
