import React from 'react';
import './Header.scss';

function Header() {
	return (
		<div className='header'>
			<div className='header_container'>
				<h1 className='logo'>STAR WARS</h1>
				<div className='buttons'>
					<button className='buttons__btn-primary'>
						CLICK ME NOW!
					</button>
					<button className='buttons__btn-primary'>
						CLICK ME NOW!
					</button>
					<button className='buttons__btn-primary'>
						CLICK ME NOW!
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
