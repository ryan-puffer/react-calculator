import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = () => {
	const { handleNegativeButton } = useContext(NumberContext);
	return (
		<button
			className='button top-button'
			onClick={() => {
				handleNegativeButton();
			}}>
			±
		</button>
	);
};

export default NegativeButton;
