import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const EqualButton = () => {
	const { handleEqualButton } = useContext(NumberContext);
	return <button onClick={() => handleEqualButton()}>=</button>;
};

export default EqualButton;
