import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const PercentButton = () => {
	const { handlePercentButton } = useContext(NumberContext);
	return (
		<button className='button top-button' onClick={() => handlePercentButton()}>
			%
		</button>
	);
};

export default PercentButton;
