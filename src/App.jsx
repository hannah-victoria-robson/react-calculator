// import logo from './logo.svg'
import './App.css'
import Footer from './Footer'
import Draggable from 'react-draggable'
// import Details from './Details'
import React from 'react'
import Calculator from './Calculator'

function App() {
	return (
		<div className="App">
			<header>Calculator</header>
			<main>
				<Draggable>
					<div className="box">
						<Calculator />
					</div>
				</Draggable>
				{/* <Details /> */}
			</main>
			<Footer />{' '}
		</div>
	)
}

export default App
