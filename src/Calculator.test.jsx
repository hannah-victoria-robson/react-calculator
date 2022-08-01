import Calculator from './Calculator'
import { render, screen, renderer } from '@testing-library/react'

it('renders the calculator', () => {
	render(<Calculator />)
})
