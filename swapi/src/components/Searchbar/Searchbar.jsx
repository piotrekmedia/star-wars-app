import React from 'react';
import './Searchbar.scss';

function Searchbar() {
	return (
		<div className='searchbar'>
			<div className='searchbar-input'>
				<input type='text' placeholder='Search phrase...' />
			</div>
			<button className='searchbar-btn'>Search!</button>
		</div>
	);
}

export default Searchbar;
