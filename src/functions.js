// undefined needs to show ERROR

// font size decreases to fit all numbers

// 16 decimals places max  e.g. 1.234567890123456

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
	if (output.secondOperand !== '0') {
		const number = output.secondOperand
		const decimal = number + '.'
		outputCopy.secondOperand = decimal
		outputCopy.output = decimal
		const finalOutput = setFontSize(output)
		return finalOutput
	} else if (output.secondOperand === '0' && output.operator === '0') {
		const number = outputCopy.firstOperand
		const decimal = number + '.'
		outputCopy.firstOperand = decimal
		outputCopy.output = decimal
		const finalOutput = setFontSize(output)
		return finalOutput
	} else if (output.secondOperand === '0' && output.operator !== '0') {
		outputCopy.secondOperand = '0.'
		outputCopy.output = '0.'
		const finalOutput = setFontSize(output)
		return finalOutput
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
	const finalOutput = setFontSize(output)
	return finalOutput
}

function toggleNumber(output) {
	if (output.firstOperand !== '0' && output.operator === '0') {
		const number = output.firstOperand
		const numArray = number.split(',')
		numArray[0] === '-' ? numArray.shift() : numArray.unshift('-')
		const newOutput = numArray.join('')
		output.firstOperand = newOutput
		output.output = newOutput
		const finalOutput = setFontSize(output)
		return finalOutput
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
		outputCopy.firstOperand = newInput
		outputCopy.output = newInput
		return outputCopy
	}
	if (output.firstOperand !== '0' && output.operator === '0') {
		const currentNumber = output.firstOperand + newInput
		outputCopy.firstOperand = currentNumber
		outputCopy.output = currentNumber
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

	function runCalculation(output) {
		const outputCopy = { ...output }
		let sum = []
		if (outputCopy.operator === 'add') {
			sum.push(
				parseFloat(outputCopy.firstOperand) +
					parseFloat(outputCopy.secondOperand)
			)
		} else if (outputCopy.operator === 'subtract') {
			sum.push(
				parseFloat(outputCopy.firstOperand) -
					parseFloat(outputCopy.secondOperand)
			)
		} else if (outputCopy.operator === 'divide') {
			sum.push(
				parseFloat(outputCopy.firstOperand) /
					parseFloat(outputCopy.secondOperand)
			)
		} else if (outputCopy.operator === 'multiply') {
			sum.push(
				parseFloat(outputCopy.firstOperand) *
					parseFloat(outputCopy.secondOperand)
			)
		}
		const decimalSum = sum[0].toFixed(15)
		const finalSum = parseFloat(decimalSum)
		const finalOutput = setSum(outputCopy, finalSum)
		return finalOutput
	}
}

// limit decimals to 16 (1.111111111111111)
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
	const outputData = output.firstOperand
	const length = outputData.length
	if (length > 40 && length <= 65) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		console.log('remove: ' + remove)
		const minus = remove * 0.4
		const fontSize = minus
		console.log('minus: ' + minus)

		console.log(fontSize)
		output.fontSize = fontSize + 'px'
	} else if (length > 20 && length <= 40) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		console.log('remove: ' + remove)
		const minus = remove * 0.5
		const fontSize = minus
		console.log('minus: ' + minus)

		console.log(fontSize)
		output.fontSize = fontSize + 'px'
	} else if (length > 12 && length <= 30) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		console.log('remove: ' + remove)
		const minus = remove * 0.6
		const fontSize = minus
		console.log('minus: ' + minus)

		console.log(fontSize)
		output.fontSize = fontSize + 'px'
	} else if (length > 9) {
		const extraLength = length - 9
		const remove = 50 - extraLength
		const minus = remove * 0.7
		const fontSize = minus
		console.log(fontSize)
		output.fontSize = fontSize + 'px'
	}
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
	outputCopy.fontSize = '50px'
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
