import React from 'react';
import './Header.scss';
import Searchbar from '../Searchbar/Searchbar';

function Header() {
	return (
		<div className='header'>
			<div className='header_container'>
				<h1 className='logo'>STAR WARS</h1>
				<Searchbar />
			</div>
		</div>
	);
}

export default Header;
