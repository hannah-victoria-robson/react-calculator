import './App.css'
import Footer from './Footer'
import Draggable from 'react-draggable'
// import Details from './Details'
import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

import Calculator from './Calculator'

function App() {
	return (
		<div className="App">
			<header>Calculator</header>
			<main>
				<div className="calc-parent">
					<>{/* <section className="calc-frame" id="border"></section> */}</>
					<Draggable defaultPosition={{ x: -125, y: 200 }}>
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
