import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import PercentButton from './PercentButton';
import NegativeButton from './NegativeButton';
import ZeroButton from './ZeroButton';
import Top from './Top';
import { CalculatorStyles } from './styles/Styles';

const Calculator = () => (
	<CalculatorStyles>
		<Top />
		<div className='display'>
			<Display />
		</div>
		<div className='number-pad'>
			<ClearButton />
			<NegativeButton />
			<PercentButton />
			<FunctionButton buttonValue='÷' />
			<NumberButton buttonValue={7} />
			<NumberButton buttonValue={8} />
			<NumberButton buttonValue={9} />
			<FunctionButton buttonValue='×' />
			<NumberButton buttonValue={4} />
			<NumberButton buttonValue={5} />
			<NumberButton buttonValue={6} />
			<FunctionButton buttonValue='−' />
			<NumberButton buttonValue={1} />
			<NumberButton buttonValue={2} />
			<NumberButton buttonValue={3} />
			<FunctionButton buttonValue='+' />

			<ZeroButton buttonValue={0} />

			<NumberButton buttonValue='.' />
			<EqualButton />
		</div>
		<div className='bottom'></div>
	</CalculatorStyles>
);

export default Calculator;
