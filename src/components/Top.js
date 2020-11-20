import React from 'react';
import menu from '../assets/menu.png';

const Top = () => {
	const time = new Date().toLocaleTimeString([], { timeStyle: 'short' });

	return (
		<div className='top'>
			<div className='time'>{time}</div>
			<div className='right-corner'>
				<div className='menu'>
					<img className='menu' src={menu} />
				</div>
			</div>
		</div>
	);
};

export default Top;
