import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
	const [number, setNumber] = useState('0');

	const handleSetDisplayValue = (num) => {
		if (!number.includes('.') || num !== '.') {
			setNumber(`${(number + num).replace(/^0+/, '')}`);
		}
	};

	const handleClearValue = () => {
		setNumber('');
	};

	return (
		<NumberContext.Provider
			value={{ handleSetDisplayValue, handleClearValue, number }}>
			{props.children}
		</NumberContext.Provider>
	);
};

export default NumberProvider;
