import React from 'react';
import './Searchbar.scss';

function Searchbar() {
	return (
		<div className='search-container'>
			<div className='inputs'>
				<input type='text' placeholder='Search phrase...' />
			</div>
			<button className='search-btn'>Search!</button>
		</div>
	);
}

export default Searchbar;
