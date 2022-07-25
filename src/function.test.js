import { math } from './function'

it('determines whether the input is a number', () => {
	expect(math('hi', 0)).toBe(false)
	expect(math(2, 2)).toBe(true)
})
