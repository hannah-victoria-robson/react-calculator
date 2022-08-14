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
		const clear = clearOutput(output)
		return clear
	} else if (newInput === 'equals') {
		const sum = calculateSum(output, newInput)
		return sum
	} else if (newInput === 'toggle') {
		const operator = toggleNumber(output)
		return operator
	} else if (newInput === 'percent') {
		const operator = handlePercent(output)
		return operator
	} else if (newInput === 'decimal') {
		const operator = handleDecimal(output)
		return operator
	} else {
		const operator = setOperator(output, newInput)
		return operator
	}
}

function handleDecimal(output) {
	const lastCharacter = output.output
	const checkLastChar = lastCharacter.substr(-1)
	const sum = output.sum
	output.lastOperator = 'decimal'
	if (checkLastChar === '.' || sum % 1 !== 0) {
		return output
	} else if (sum % 1 !== 0) {
		return output
	} else if (output.secondOperand !== '0') {
		const number = output.secondOperand
		const decimal = number + '.'
		output.secondOperand = decimal
		output.output = decimal
		const finalOutput = setFontSize(output)
		return finalOutput
	} else if (output.secondOperand === '0' && output.operator === '0') {
		const number = output.firstOperand
		const decimal = number + '.'
		output.firstOperand = decimal
		output.output = decimal
		const finalOutput = setFontSize(output)
		return finalOutput
	} else if (output.secondOperand === '0' && output.operator !== '0') {
		output.secondOperand = '0.'
		output.output = '0.'
		const finalOutput = setFontSize(output)
		return finalOutput
	}
}

function handlePercent(output) {
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
	output.sum = decimal[0]
	output.firstOperand = '' + decimal[0]
	output.output = '' + decimal[0]
	output.operator = '0'
	output.lastOperator = 'percent'
	const finalOutput = setFontSize(output)
	return finalOutput
}

function toggleNumber(output) {
	const sum = output.sum
	const subtract = sum * 2
	const newSum = sum - subtract
	const newSumString = '' + newSum
	output.firstOperand = newSumString
	output.sum = newSum
	output.output = newSumString
	output.operator = '0'
	output.lastOperator = 'toggle'
	return output
}

function setOperator(output, newInput) {
	const input = newInput
	if (output.secondOperand !== '0') {
		const sum = calculateSum(output)
		sum.operator = input
		return sum
	} else {
		output.operator = input
		output.secondOperand = '0'
		return output
	}
}

function handleNumbers(output, newInput) {
	if (output.firstOperand === '0') {
		output.clearButton = 'C'
		output.firstOperand = newInput
		output.output = newInput
		output.sum = parseFloat(newInput)
		return output
	} else if (output.firstOperand !== '0' && output.operator === '0') {
		const currentNumber = output.firstOperand + newInput
		output.firstOperand = currentNumber
		output.output = currentNumber
		output.sum = parseFloat(currentNumber)
		const finalOutput = setFontSize(output)
		return finalOutput
	} else if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand === '0'
	) {
		output.secondOperand = newInput
		output.output = newInput
		output.sum = parseFloat(newInput)

		return output
	} else if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand !== '0'
	) {
		const currentNumber = output.secondOperand + newInput
		output.secondOperand = currentNumber
		output.output = currentNumber
		output.sum = parseFloat(currentNumber)
		const finalOutput = setFontSize(output)
		return finalOutput
	} else {
		console.log('error')
	}
}

function calculateSum(output) {
	if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand !== '0'
	) {
		const sum = runCalculation(output)
		return sum
	} else if (
		output.firstOperand !== '0' &&
		output.operator !== '0' &&
		output.secondOperand === '0'
	) {
		const secondOperand = output.firstOperand
		output.secondOperand = secondOperand
		const sum = runCalculation(output)
		return sum
	} else if (
		output.firstOperand !== '0' &&
		output.operator === '0' &&
		output.secondOperand === '0' &&
		output.lastOperator !== '0' &&
		output.lastSecondOperand !== '0'
	) {
		const operator = output.lastOperator
		const secondOperand = output.lastSecondOperand
		output.operator = operator
		output.secondOperand = secondOperand
		const sum = runCalculation(output)
		return sum
	} else if (
		output.firstOperand !== '0' &&
		output.operator === '0' &&
		output.secondOperand === '0' &&
		output.lastOperator === '0' &&
		output.lastSecondOperand === '0'
	) {
		return output
	}
}
function runCalculation(output) {
	let sum = []
	if (output.operator === 'add') {
		sum.push(parseFloat(output.firstOperand) + parseFloat(output.secondOperand))
	} else if (output.operator === 'subtract') {
		sum.push(parseFloat(output.firstOperand) - parseFloat(output.secondOperand))
	} else if (output.operator === 'divide') {
		sum.push(parseFloat(output.firstOperand) / parseFloat(output.secondOperand))
	} else if (output.operator === 'multiply') {
		sum.push(parseFloat(output.firstOperand) * parseFloat(output.secondOperand))
	}
	if (sum[0] === 'undefined') {
		const error = clearOutput(output)
		error.output = 'error'
		return error
	} else {
		const decimalSum = sum[0].toFixed(15)
		const finalSum = parseFloat(decimalSum)
		const finalOutput = setSum(output, finalSum)
		return finalOutput
	}
}

function setSum(output, sum) {
	const sumString = '' + sum
	const operatorArray = []
	output.operator === '0' && output.lastOperator !== '0'
		? operatorArray.push(output.lastOperator)
		: operatorArray.push(output.operator)

	output.secondOperand === '0' && output.lastSecondOperand !== '0'
		? operatorArray.push(output.lastSecondOperand)
		: operatorArray.push(output.secondOperand)

	output.firstOperand = sumString
	output.operator = '0'
	output.secondOperand = '0'
	output.sum = sum
	output.output = sumString
	output.lastOperator = operatorArray[0]
	output.lastSecondOperand = operatorArray[1]
	const finalOutput = setFontSize(output)
	return finalOutput
}

function setFontSize(output) {
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
		const remove = 55 - extraLength
		const minus = remove * 0.8
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (length > 8 && length <= 10) {
		const extraLength = length - 9
		const remove = 55 - extraLength
		const minus = remove * 0.89
		const fontSize = minus
		output.fontSize = fontSize + 'px'
	} else if (output.output === 'undefined') {
		output.fontSize = '55px'
	}
	return output
}

function clearOutput(output) {
	output.sum = 0
	output.secondOperand = '0'
	output.firstOperand = '0'
	output.operator = '0'
	output.output = '0'
	output.lastOperator = '0'
	output.lastSecondOperand = '0'
	output.fontSize = '55px'
	output.clearButton = 'AC'
	return output
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
