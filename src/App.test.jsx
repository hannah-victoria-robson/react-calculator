import { render, screen, renderer } from '@testing-library/react'
import App from './App'

it('renders the landing page', () => {
	render(<App />)
})

// describe('<App />', () => {
// 	it('has 1 child', () => {
// 		const tree = renderer.create(<App />).toJSON()
// 		expect(tree.children.length).toBe(1)
// 	})
// })
// it('renders correctly', () => {
// 	const tree = renderer.create(<App />).toJSON()
// 	expect(tree).toMatchSnapshot()
// })
