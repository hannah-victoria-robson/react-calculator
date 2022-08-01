import {
	isNumber,
	handleOperators,
	setOperator,
	handleNumbers,
	clearOutput,
	calculateSum,
	runCalculation,
	setFontSize,
	setSum,
	toggleNumber,
	handlePercent,
	handleDecimal,
} from './functions'

it('determines whether the input is a number or not a number', () => {
	expect(isNumber('hi', 0)).toBe(false)
	expect(isNumber(2, 2)).toBe(true)
})

it('sets operator to input', () => {
	expect(
		handleOperators(
			{
				firstOperand: '123',
				operator: '0',
				secondOperand: '0',
				sum: 0,
				output: '0',
				lastOperator: '0',
				lastSecondOperand: '0',
			},
			'add'
		)
	).toEqual({
		firstOperand: '123',
		operator: 'add',
		secondOperand: '0',
		sum: 0,
		output: '0',
		lastOperator: '0',
		lastSecondOperand: '0',
	})
})

// test handle operators
it('sets input as the object.operator', () => {
	expect(
		setOperator(
			{
				firstOperand: '123',
				operator: '0',
				secondOperand: '0',
				sum: 0,
				output: '0',
			},
			'add'
		)
	).toEqual({
		firstOperand: '123',
		operator: 'add',
		secondOperand: '0',
		sum: 0,
		output: '0',
	})
})

it('returns an object with values set to 0', () => {
	expect(
		clearOutput({
			firstOperand: '123',
			operator: 'divide',
			secondOperand: '321',
			sum: 33,
			output: '33',
			lastOperator: 'add',
			lastSecondOperand: '2',
		})
	).toEqual({
		firstOperand: '0',
		operator: '0',
		secondOperand: '0',
		sum: 0,
		output: '0',
		lastOperator: '0',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'AC',
	})
})

/// handleNumbers tests

it('replaces 0 with a number for first number entered', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '0',
				operator: '0',
				secondOperand: '0',
				sum: 0,
				output: '0',
				lastOperator: '0',
				lastSecondOperand: '0',
				fontSize: '55px',
				clearButton: 'AC',
			},
			'1'
		)
	).toEqual({
		firstOperand: '1',
		operator: '0',
		secondOperand: '0',
		sum: 1,
		output: '1',
		lastOperator: '0',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'C',
	})
})

it('concats to first number if first number isnt 0', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '1',
				operator: '0',
				secondOperand: '0',
				sum: 1,
				output: '1',
				lastOperator: '0',
				lastSecondOperand: '0',
			},
			'1'
		)
	).toEqual({
		firstOperand: '11',
		operator: '0',
		secondOperand: '0',
		sum: 11,
		output: '11',
		lastOperator: '0',
		lastSecondOperand: '0',
	})
})
it('replaces second number 0 with a number for first number entered', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '11',
				operator: 'add',
				secondOperand: '0',
				sum: 11,
				output: '11',
				lastOperator: '0',
				lastSecondOperand: '0',
			},
			'1'
		)
	).toEqual({
		firstOperand: '11',
		operator: 'add',
		secondOperand: '1',
		sum: 1,
		output: '1',
		lastOperator: '0',
		lastSecondOperand: '0',
	})
})
it('concats to second number if second number isnt 0', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '11',
				operator: 'add',
				secondOperand: '2',
				sum: 2,
				output: '2',
				lastOperator: '0',
				lastSecondOperand: '0',
			},
			'1'
		)
	).toEqual({
		firstOperand: '11',
		operator: 'add',
		secondOperand: '21',
		sum: 21,
		output: '21',
		lastOperator: '0',
		lastSecondOperand: '0',
	})
})

it('adds 2 and 2, sets sum and output to 4', () => {
	expect(
		calculateSum({
			firstOperand: '2',
			operator: 'add',
			secondOperand: '2',
			sum: 0,
			output: '2',
			lastOperator: '0',
			lastSecondOperand: '0',
		})
	).toEqual({
		firstOperand: '4',
		operator: '0',
		secondOperand: '0',
		sum: 4,
		output: '4',
		lastOperator: 'add',
		lastSecondOperand: '2',
	})
})
it('multiples 2 by 3, sets sum and output to 6', () => {
	expect(
		calculateSum({
			firstOperand: '2',
			operator: 'multiply',
			secondOperand: '3',
			sum: 0,
			output: '2',
			lastOperator: '0',
			lastSecondOperand: '0',
		})
	).toEqual({
		firstOperand: '6',
		operator: '0',
		secondOperand: '0',
		sum: 6,
		output: '6',
		lastOperator: 'multiply',
		lastSecondOperand: '3',
	})
})
it('repeats previous operator and secondOperand when the equals button is clicked consecutively', () => {
	expect(
		calculateSum(
			{
				firstOperand: '3',
				operator: '0',
				secondOperand: '0',
				sum: 3,
				output: '3',
				lastOperator: 'add',
				lastSecondOperand: '2',
			},
			'equals'
		)
	).toEqual({
		firstOperand: '5',
		operator: '0',
		secondOperand: '0',
		sum: 5,
		output: '5',
		lastOperator: 'add',
		lastSecondOperand: '2',
	})
})

it('should return an object with the first operand, sum, and output set to the correct sum', () => {
	expect(
		runCalculation({
			firstOperand: '23',
			operator: 'multiply',
			secondOperand: '2',
			sum: 23,
			output: '23',
			lastOperator: '0',
			lastSecondOperand: '0',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '46',
		operator: '0',
		secondOperand: '0',
		sum: 46,
		output: '46',
		lastOperator: 'multiply',
		lastSecondOperand: '2',
		fontSize: '55px',
		clearButton: 'C',
	})
})

test.todo('write tests for runCalculation')

// it('should return an error if sum is undefined', () => {
// 	expect(
// 		runCalculation({
// 			firstOperand: 'l23',
// 			operator: 'multiply',
// 			secondOperand: '2l',
// 			sum: 0,
// 			output: '23',
// 			lastOperator: '0',
// 			lastSecondOperand: '0',
// 			fontSize: '55px',
// 			clearButton: 'C',
// 		})
// 	).toEqual({
// 		firstOperand: '0',
// 		operator: '0',
// 		secondOperand: '0',
// 		sum: NaN,
// 		output: 'NaN',
// 		lastOperator: '2',
// 		lastSecondOperand: 'multiply',
// 		fontSize: '55px',
// 		clearButton: 'C',
// 	})
// })

it('should make font size smaller when there are more numbers', () => {
	expect(
		setFontSize({
			firstOperand: '1234567891',
			operator: 'add',
			secondOperand: '1',
			sum: 1234567891,
			output: '1234567891',
			lastOperator: 'add',
			lastSecondOperand: '23',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '1234567891',
		operator: 'add',
		secondOperand: '1',
		sum: 1234567891,
		output: '1234567891',
		lastOperator: 'add',
		lastSecondOperand: '23',
		fontSize: '43.61px',
		clearButton: 'C',
	})
})

test.todo('write tests for setSum')

// it('should set object values according to sum', () => {
// 	expect(
// 		setSum({
// 			firstOperand: '1',
// 			operator: 'add',
// 			secondOperand: '2',
// 			sum: 1,
// 			output: '1',
// 			lastOperator: '0',
// 			lastSecondOperand: '0',
// 			fontSize: '55px',
// 			clearButton: 'C',
// 		})
// 	).toEqual({
// 		firstOperand: '3',
// 		operator: '0',
// 		secondOperand: '0',
// 		sum: 3,
// 		output: '3',
// 		lastOperator: 'add',
// 		lastSecondOperand: '2',
// 		fontSize: '55px',
// 		clearButton: 'C',
// 	})
// })

it('should not change the output for a second decimal in a row', () => {
	expect(
		handleDecimal({
			firstOperand: '1.',
			operator: 'decimal',
			secondOperand: '0',
			sum: 1,
			output: '1.',
			lastOperator: '0',
			lastSecondOperand: '0',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '1.',
		operator: '0',
		secondOperand: '0',
		sum: 1,
		output: '1.',
		lastOperator: 'decimal',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'C',
	})
})

it('should add a decimal to the second operarand number', () => {
	expect(
		handleDecimal({
			firstOperand: '1',
			operator: 'decimal',
			secondOperand: '2',
			sum: 2,
			output: '2',
			lastOperator: '0',
			lastSecondOperand: '0',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '1',
		operator: '0',
		secondOperand: '2.',
		sum: 2,
		output: '2.',
		lastOperator: 'decimal',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'C',
	})
})

it('should turn a positive number into a negative number', () => {
	expect(
		toggleNumber({
			firstOperand: '5',
			operator: 'toggle',
			secondOperand: '0',
			sum: 5,
			output: '5',
			lastOperator: '0',
			lastSecondOperand: '0',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '-5',
		operator: '0',
		secondOperand: '0',
		sum: -5,
		output: '-5',
		lastOperator: 'toggle',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'C',
	})
})

it('should turn a negative number into a positive number', () => {
	expect(
		toggleNumber({
			firstOperand: '-5',
			operator: 'toggle',
			secondOperand: '0',
			sum: -5,
			output: '-5',
			lastOperator: '0',
			lastSecondOperand: '0',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '5',
		operator: '0',
		secondOperand: '0',
		sum: 5,
		output: '5',
		lastOperator: 'toggle',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'C',
	})
})

it('should return value as a decimal that represents it as a percentage', () => {
	expect(
		handlePercent({
			firstOperand: '10',
			operator: 'percent',
			secondOperand: '0',
			sum: 10,
			output: '10',
			lastOperator: '0',
			lastSecondOperand: '0',
			fontSize: '55px',
			clearButton: 'C',
		})
	).toEqual({
		firstOperand: '0.1',
		operator: '0',
		secondOperand: '0',
		sum: 0.1,
		output: '0.1',
		lastOperator: 'percent',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'C',
	})
})
