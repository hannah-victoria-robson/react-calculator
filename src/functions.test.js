import {
	isNumber,
	handleOperators,
	setOperator,
	handleNumbers,
	clearOutput,
	calculateSum,
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
	// expect(handleOperators()).toHaveBeenCalled()
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
		})
	).toEqual({
		firstOperand: '0',
		operator: '0',
		secondOperand: '0',
		sum: 0,
		output: '0',
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
			},
			'1'
		)
	).toEqual({
		firstOperand: '1',
		operator: '0',
		secondOperand: '0',
		sum: 0,
		output: '1',
	})
})

it('concats to first number if first number isnt 0', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '1',
				operator: '0',
				secondOperand: '0',
				sum: 0,
				output: '0',
			},
			'1'
		)
	).toEqual({
		firstOperand: '11',
		operator: '0',
		secondOperand: '0',
		sum: 0,
		output: '11',
	})
})
it('replaces second number 0 with a number for first number entered', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '11',
				operator: 'add',
				secondOperand: '0',
				sum: 0,
				output: '0',
			},
			'1'
		)
	).toEqual({
		firstOperand: '11',
		operator: 'add',
		secondOperand: '1',
		sum: 0,
		output: '1',
	})
})
it('concats to second number if second number isnt 0', () => {
	expect(
		handleNumbers(
			{
				firstOperand: '11',
				operator: 'add',
				secondOperand: '0',
				sum: 0,
				output: '0',
			},
			'1'
		)
	).toEqual({
		firstOperand: '11',
		operator: 'add',
		secondOperand: '1',
		sum: 0,
		output: '1',
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
		})
	).toEqual({
		firstOperand: '4',
		operator: '0',
		secondOperand: '0',
		sum: 4,
		output: '4',
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
		})
	).toEqual({
		firstOperand: '6',
		operator: '0',
		secondOperand: '0',
		sum: 6,
		output: '6',
	})
})

test.todo('write tests for function calls')
test.todo('write tests for invalid input')
