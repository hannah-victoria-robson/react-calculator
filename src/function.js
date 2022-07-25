function math(newInput, output) {
	const numberInput = Number(newInput)

	if (isNaN(numberInput)) {
		console.log('Not a number')
		return false
	}
	if (typeof numberInput == 'number') {
		console.log('is a number')
		return true
	}

	// recieving strings
	// is it a number
	// is it adding to the previous
	// if the previous was "0" it replaces it
	// if not a number, other behaviour
}

export { math }
