import React from 'react';
import menu from '../assets/menu.png';

const Top = () => {
	const time = new Date();

	return (
		<div className='top'>
			<div className='time'>
				{time.getHours().toString().padStart(2, '0')}:
				{time.getMinutes().toString().padStart(2, '0')}
			</div>
			<div className='right-corner'>
				<div className='menu'>
					<img className='menu' src={menu} />
				</div>
			</div>
		</div>
	);
};

export default Top;
