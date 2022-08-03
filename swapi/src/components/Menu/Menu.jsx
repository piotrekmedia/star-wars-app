import React from 'react';
import './Menu.scss';

function Menu() {
	return (
		<div className='buttons-container'>
			<div className='buttons'>
				<button className='buttons__btn-primary'>People</button>
				<button className='buttons__btn-primary'>Planets</button>
				<button className='buttons__btn-primary'>Species</button>
				<button className='buttons__btn-primary'>Vehicles</button>
				<button className='buttons__btn-primary'>Starships</button>
			</div>
		</div>
	);
}

export default Menu;
