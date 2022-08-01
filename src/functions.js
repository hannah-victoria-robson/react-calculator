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
		const sum = calculateSum(outputCopy, newInput)
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
	const lastCharacter = outputCopy.output
	const checkLastChar = lastCharacter.substr(-1)
	if (checkLastChar === '.') {
		outputCopy.lastOperator = 'decimal'
		outputCopy.operator = '0'
		return outputCopy
	} else if (output.secondOperand !== '0') {
		const number = output.secondOperand
		const decimal = number + '.'
		outputCopy.secondOperand = decimal
		outputCopy.output = decimal
		outputCopy.lastOperator = 'decimal'
		outputCopy.operator = '0'
		const finalOutput = setFontSize(outputCopy)
		return finalOutput
	} else if (output.secondOperand === '0' && output.operator === '0') {
		const number = outputCopy.firstOperand
		const decimal = number + '.'
		outputCopy.firstOperand = decimal
		outputCopy.output = decimal
		outputCopy.lastOperator = 'decimal'
		outputCopy.operator = '0'
		const finalOutput = setFontSize(outputCopy)
		return finalOutput
	} else if (output.secondOperand === '0' && output.operator !== '0') {
		outputCopy.secondOperand = '0.'
		outputCopy.output = '0.'
		outputCopy.lastOperator = 'decimal'
		outputCopy.operator = '0'
		const finalOutput = setFontSize(outputCopy)
		return finalOutput
	}
}

function handlePercent(output) {
	const outputCopy = { ...output }
	const decimal = []
	if (output.secondOperand !== '0') {
		const newOutput = calculateSum(outputCopy)
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
	outputCopy.operator = '0'
	outputCopy.lastOperator = 'percent'
	const finalOutput = setFontSize(outputCopy)
	return finalOutput
}

function toggleNumber(output) {
	const sum = output.sum
	if (Math.sign(sum) === 1 || Math.sign(sum) === -1) {
		const subtract = sum * 2
		const newSum = sum - subtract
		const newSumString = '' + newSum
		output.firstOperand = newSumString
		output.sum = newSum
		output.output = newSumString
		output.operator = '0'
		output.lastOperator = 'toggle'
		return output
	} else if (Math.sign(sum) === 0) {
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
	} else {
		outputCopy.operator = input
		outputCopy.secondOperand = '0'
		return outputCopy
	}
}

function handleNumbers(output, newInput) {
	const outputCopy = { ...output }
	if (output.firstOperand === '0') {
		outputCopy.clearButton = 'C'
		outputCopy.firstOperand = newInput
		outputCopy.output = newInput
		outputCopy.sum = parseFloat(newInput)

		return outputCopy
	}
	if (output.firstOperand !== '0' && output.operator === '0') {
		const currentNumber = output.firstOperand + newInput
		outputCopy.firstOperand = currentNumber
		outputCopy.output = currentNumber
		outputCopy.sum = parseFloat(currentNumber)
		const finalOutput = setFontSize(outputCopy)
		return finalOutput
	}
	if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand === '0'
	) {
		outputCopy.secondOperand = newInput
		outputCopy.output = newInput
		outputCopy.sum = parseFloat(newInput)

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
		outputCopy.sum = parseFloat(currentNumber)
		const finalOutput = setFontSize(outputCopy)
		return finalOutput
	} else {
		console.log('error')
	}
}

function calculateSum(output) {
	const outputCopy = { ...output }
	if (
		outputCopy.firstOperand !== '0' &&
		outputCopy.operator !== '0' &&
		outputCopy.secondOperand !== '0'
	) {
		const sum = runCalculation(outputCopy)
		return sum
	} else if (
		outputCopy.firstOperand !== '0' &&
		outputCopy.operator !== '0' &&
		outputCopy.secondOperand === '0'
	) {
		const secondOperand = outputCopy.firstOperand
		outputCopy.secondOperand = secondOperand
		const sum = runCalculation(outputCopy)
		return sum
	} else if (
		outputCopy.firstOperand !== '0' &&
		outputCopy.operator === '0' &&
		outputCopy.secondOperand === '0' &&
		outputCopy.lastOperator !== '0' &&
		outputCopy.lastSecondOperand !== '0'
	) {
		const operator = outputCopy.lastOperator
		const secondOperand = outputCopy.lastSecondOperand
		outputCopy.operator = operator
		outputCopy.secondOperand = secondOperand
		const sum = runCalculation(outputCopy)
		return sum
	} else if (
		outputCopy.firstOperand !== '0' &&
		outputCopy.operator === '0' &&
		outputCopy.secondOperand === '0' &&
		outputCopy.lastOperator === '0' &&
		outputCopy.lastSecondOperand === '0'
	) {
		return outputCopy
	}
}
function runCalculation(output) {
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
	if (sum[0] === 'undefined') {
		const error = clearOutput(outputCopy)
		error.output = 'error'
		return error
	} else {
		const decimalSum = sum[0].toFixed(15)
		const finalSum = parseFloat(decimalSum)
		const finalOutput = setSum(outputCopy, finalSum)
		return finalOutput
	}
}

function setSum(output, sum) {
	const outputCopy = { ...output }
	const sumString = '' + sum
	const operatorArray = []
	output.operator === '0' && output.lastOperator !== '0'
		? operatorArray.push(output.lastOperator)
		: operatorArray.push(output.operator)

	output.secondOperand === '0' && output.lastSecondOperand !== '0'
		? operatorArray.push(output.lastSecondOperand)
		: operatorArray.push(output.secondOperand)

	outputCopy.firstOperand = sumString
	outputCopy.operator = '0'
	outputCopy.secondOperand = '0'
	outputCopy.sum = sum
	outputCopy.output = sumString
	outputCopy.lastOperator = operatorArray[0]
	outputCopy.lastSecondOperand = operatorArray[1]
	const finalOutput = setFontSize(outputCopy)
	return finalOutput
}

function setFontSize(output) {
	// const outputCopy = { ...output }
	const outputData = output.output
	const length = outputData.length
	if (length > 22) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.6
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 19 && length <= 22) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.63
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 17 && length <= 19) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.7
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 15 && length <= 17) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.7
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 13 && length <= 15) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.75
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 10 && length <= 13) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.8
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 8 && length <= 10) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.89
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (output.output === 'undefined') {
		output.fontSize = '55px'
	}
	// outputCopy.fontSize = '55px'
	return output
}

function clearOutput(output) {
	const outputCopy = { ...output }
	outputCopy.sum = 0
	outputCopy.secondOperand = '0'
	outputCopy.firstOperand = '0'
	outputCopy.operator = '0'
	outputCopy.output = '0'
	outputCopy.lastOperator = '0'
	outputCopy.lastSecondOperand = '0'
	outputCopy.fontSize = '55px'
	outputCopy.clearButton = 'AC'
	return outputCopy
}

export {
	isNumber,
	handleOperators,
	setOperator,
	handleNumbers,
	calculateSum,
	clearOutput,
	runCalculation,
	setFontSize,
	setSum,
	toggleNumber,
	handlePercent,
	handleDecimal,
}
