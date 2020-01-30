import React from 'react';

import Header from './components/Header';
import Card from './components/Card';

function App() {
	return (
		<div className="App flex flex-col h-screen">
			<Header className="z-10" />
			<main className="px-4 py-12 overflow-y-auto bg-content appearance-none lg:px-24">
				<h1 className="text-gray-900 text-4xl font-medium leading-tight">Latest Color Palettes</h1>
				<p className="mt-2 text-gray-700 font-semibold text-sm">
					Thousands of beautiful color palettes you can use it directly by one click.
				</p>
				<div className="sm:flex sm:flex-wrap sm:-mx-2">
					{Array.from({ length: 10 }, () => (
						<div className="max-w-xs sm:w-1/2 sm:px-2 md:w-1/3 lg:w-1/4">
							<Card />
						</div>
					))}
				</div>

				<div className="flex justify-center">
					<button
						className="mt-12 py-2 px-4 rounded bg-primary font-semibold text-white hover:text-primary hover:bg-gray-400"
						type="button"
					>
						View More Best Palettes <br />❤️
					</button>
				</div>
			</main>
		</div>
	);
}

export default App;
