import React from 'react';
import './Menu.scss';

function Menu() {
	return (
		<div className='btn-container'>
			<button className='btn-container__primary'>Home</button>
			<button className='btn-container__primary'>People</button>
			<button className='btn-container__primary'>Planets</button>
			<button className='btn-container__primary'>Species</button>
			<button className='btn-container__primary'>Starships</button>
		</div>
	);
}

export default Menu;
