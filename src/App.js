import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

const App = () => {
	return (
		<div>
			<NumberProvider>
				<Calculator />
			</NumberProvider>
		</div>
	);
};

export default App;
