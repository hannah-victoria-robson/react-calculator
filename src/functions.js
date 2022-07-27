function isNumber(newInput) {
	const numberInput = Number(newInput)
	if (isNaN(numberInput)) {
		return false
	}
	if (typeof numberInput == 'number') {
		return true
	}
}

function handleOperators(output, newInput) {
	if (newInput === 'AC') {
		const outputCopy = { ...output }
		const clear = clearOutput(outputCopy)
		return clear
	} else if (newInput === 'equals') {
		const outputCopy = { ...output }
		const sum = calculateSum(outputCopy)
		return sum
	} else if (newInput === 'toggle') {
		const outputCopy = { ...output }
		const operator = toggleNumber(outputCopy)
		return operator
	} else if (newInput === 'percent') {
		const outputCopy = { ...output }
		const operator = handlePercent(outputCopy)
		return operator
	} else if (newInput === 'decimal') {
		const outputCopy = { ...output }
		const operator = handleDecimal(outputCopy)
		return operator
	} else {
		const outputCopy = { ...output }
		const operator = setOperator(outputCopy, newInput)
		return operator
	}
}

function handleDecimal(output) {
	const outputCopy = { ...output }
	if (output.secondOperand !== '0') {
		const number = output.secondOperand
		const decimal = number + '.'
		outputCopy.secondOperand = decimal
		outputCopy.output = decimal
		return outputCopy
	} else if (output.secondOperand === '0') {
		const number = outputCopy.firstOperand
		const decimal = number + '.'
		outputCopy.firstOperand = decimal
		outputCopy.output = decimal
		return outputCopy
	}
}

function handlePercent(output) {
	const outputCopy = { ...output }
	const decimal = []
	if (output.secondOperand !== '0') {
		const newOutput = calculateSum(output)
		const outputSum = newOutput.sum
		const calc = outputSum / 100
		decimal.push(calc)
	} else if (output.secondOperand === '0') {
		const num = parseFloat(output.firstOperand)
		const calc = num / 100
		decimal.push(calc)
	}
	outputCopy.sum = decimal[0]
	outputCopy.firstOperand = '' + decimal[0]
	outputCopy.output = '' + decimal[0]
	return outputCopy
}

function toggleNumber(output) {
	if (output.firstOperand !== '0' && output.operator === '0') {
		const number = output.firstOperand
		const numArray = number.split(',')
		numArray[0] === '-' ? numArray.shift() : numArray.unshift('-')
		console.log(numArray)
		const newOutput = numArray.join('')
		output.firstOperand = newOutput
		output.output = newOutput
		return output
	}
}

function setOperator(output, newInput) {
	const outputCopy = { ...output }
	const input = newInput

	if (output.secondOperand !== '0') {
		const sum = calculateSum(output)
		sum.operator = input
		return sum
	} else if (
		outputCopy.firstOperand !== '0' &&
		outputCopy.secondOperand === '0'
	) {
		outputCopy.operator = input
		outputCopy.secondOperand = '0'
		return outputCopy
	} else {
		console.log('set operator error')
	}
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

function calculateSum(output, input) {
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
	outputCopy.firstOperand = sumString
	outputCopy.operator = '0'
	outputCopy.secondOperand = '0'
	return outputCopy
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

export {
	isNumber,
	handleOperators,
	setOperator,
	handleNumbers,
	calculateSum,
	clearOutput,
}
