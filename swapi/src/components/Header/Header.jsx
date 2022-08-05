import React from 'react';
import './Header.scss';
import Searchbar from '../Searchbar/Searchbar';

function Header() {
	return (
		<div className='header'>
			<div className='header-container'>
				<a href='#' className='header-container__logo'>
					STAR WARS
				</a>
				<Searchbar />
			</div>
		</div>
	);
}

export default Header;
