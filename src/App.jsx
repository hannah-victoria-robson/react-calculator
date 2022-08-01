import './App.css'
import Header from './Header'
import Calculator from './Calculator'

import Footer from './Footer'
import Draggable from 'react-draggable'
// import Details from './Details'
import React from 'react'
// import ReactDOM from 'react-dom'

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<div className="calc-parent">
					<>{/* <section className="calc-frame" id="border"></section> */}</>
					<Draggable
						handle="#handle"
						data-testid="draggable"
						defaultPosition={{ x: -125, y: 200 }}
					>
						<div className="box">
							<Calculator id="calc" />
						</div>
					</Draggable>
				</div>
				{/* <Details /> */}
			</main>
			<Footer />{' '}
		</div>
	)
}

export default App
