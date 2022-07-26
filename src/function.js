function isNumber(newInput) {
	const numberInput = Number(newInput)

	if (isNaN(numberInput)) {
		return false
	}
	if (typeof numberInput == 'number') {
		return true
	}
}

function setOperater(output, newInput) {
	const input = newInput
	const outputCopy = { ...output }
	outputCopy.operator = input
	outputCopy.secondOperand = '0'
	return outputCopy
}
async function handleOperators(output, newInput) {
	if (newInput === 'AC') {
		const outputCopy = { ...output }
		const clear = await clearOutput(outputCopy)
		return clear
	} else if (newInput === 'equals') {
		const outputCopy = { ...output }
		const sum = await calculateSum(outputCopy)
		return sum
	} else {
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

async function calculateSum(output) {
	const outputCopy = { ...output }
	let sum = []
	if (outputCopy.operator === 'add') {
		sum.push(
			parseFloat(outputCopy.firstOperand) + parseFloat(outputCopy.secondOperand)
		)
	} else if (outputCopy.operator === 'subtract') {
		sum.push(
			parseFloat(outputCopy.firstOperand) - parseFloat(outputCopy.secondOperand)
		)
	} else if (outputCopy.operator === 'divide') {
		sum.push(
			parseFloat(outputCopy.firstOperand) / parseFloat(outputCopy.secondOperand)
		)
	} else if (outputCopy.operator === 'multiply') {
		sum.push(
			parseFloat(outputCopy.firstOperand) * parseFloat(outputCopy.secondOperand)
		)
	}

	const sumResult = sum[0]
	outputCopy.sum = sumResult
	const sumString = '' + sumResult
	outputCopy.output = sumString
	return outputCopy
}

export { isNumber, clearOutput, handleNumbers, handleOperators, calculateSum }
