import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ZeroButton = ({ buttonValue }) => {
	const { handleSetDisplayValue } = useContext(NumberContext);

	return (
		<button
			className='zero-button'
			onClick={() => handleSetDisplayValue(buttonValue)}>
			{buttonValue}
		</button>
	);
};

export default ZeroButton;
