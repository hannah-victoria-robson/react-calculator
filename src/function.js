function isNumber(newInput) {
	const numberInput = Number(newInput)

	if (isNaN(numberInput)) {
		console.log('Not a number')

		return false
	}
	if (typeof numberInput == 'number') {
		console.log('is a number')
		return true
	}
}

function setOperater(output, newInput) {
	const operatorSymbols = {
		equals: '=',
		add: '+',
		subtract: '-',
		divide: '/',
		mulitply: '*',
	}
	const input = newInput
	const outputCopy = { ...output }
	const newoperator = operatorSymbols[input]
	outputCopy.operator = newoperator

	return outputCopy
}
async function handleOperators(output, newInput) {
	console.log(newInput)
	console.log('handleOperator')
	if (newInput === 'AC') {
		console.log('handle clear')
		const outputCopy = { ...output }
		const clear = await clearOutput(outputCopy)
		return clear
	} else if (newInput === 'equals') {
		const outputCopy = { ...output }
		const sum = await calculateSum(outputCopy)
		return sum
	} else {
		console.log('handle +- etc')
		const outputCopy = { ...output }
		const operator = await setOperater(outputCopy, newInput)
		return operator
	}
}

function clearOutput(output) {
	const outputCopy = { ...output }
	outputCopy.sum = 0
	outputCopy.secondOperand = '0'
	outputCopy.firstOperand = '0'
	outputCopy.operator = '0'
	outputCopy.output = '0'
	return outputCopy
}

function handleNumbers(output, newInput) {
	console.log('handleNumbers')
	const outputCopy = { ...output }
	if (output.firstOperand === '0') {
		outputCopy.firstOperand = newInput
		outputCopy.output = newInput
		return outputCopy
	}
	if (output.firstOperand !== '0' && output.operator === '0') {
		const currentNumber = output.firstOperand + newInput
		outputCopy.firstOperand = currentNumber
		outputCopy.output = currentNumber
		return outputCopy
	}
	if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand === '0'
	) {
		outputCopy.secondOperand = newInput
		outputCopy.output = newInput
		return outputCopy
	}
	if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand !== '0'
	) {
		const currentNumber = output.secondOperand + newInput
		outputCopy.secondOperand = currentNumber
		outputCopy.output = currentNumber
		return outputCopy
	} else {
		console.log('error')
	}
}

function calculateSum(output) {
	console.log('calculateSum')
	const outputCopy = { ...output }
	outputCopy.sum = 23
	outputCopy.output = '23'
	return outputCopy
}

export { isNumber, clearOutput, handleNumbers, handleOperators, calculateSum }
