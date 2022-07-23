// import logo from './logo.svg'
import './App.css'
import Draggable from 'react-draggable'

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
			</main>
			<footer></footer>
		</div>
	)
}

export default App
