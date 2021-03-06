import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ buttonValue }) => {
	const { handleFunctionButton } = useContext(NumberContext);

	return (
		<button
			onClick={() => {
				handleFunctionButton(buttonValue);
			}}
			value={buttonValue}
			className='function-button'>
			{buttonValue}
		</button>
	);
};

export default FunctionButton;
