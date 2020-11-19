import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
	const { handleClearValue } = useContext(NumberContext);

	return (
		<button
			className='button top-button'
			onClick={() => {
				handleClearValue();
			}}>
			AC
		</button>
	);
};

export default ClearButton;
