import React from 'react'

function Calculator() {
	return (
		<>
			<main>
				<section className="calc-container">
					<header>Calculator</header>
					<div className="calculator">
						<div className="top-bar">
							<div className="red"></div>
							<div className="yellow"></div>
							<div className="green"></div>
						</div>
						<output className="output">440.99</output>
						<button className="AC top">AC</button>
						<button className="number-toggle top">+/-</button>
						<button className="percent top">%</button>
						<button className="divide right">/</button>
						<button className="multiply right">X</button>
						<button className="subtract right">-</button>
						<button className="add right">+</button>
						<button className="equals right">=</button>
						<button className="nine">9</button>
						<button className="eight">8</button>
						<button className="seven">7</button>
						<button className="six">6</button>
						<button className="five">5</button>
						<button className="four">4</button>
						<button className="three">3</button>
						<button className="two">2</button>
						<button className="one">1</button>
						<button className="zero">0</button>
						<button className="decimal">.</button>
					</div>
				</section>
			</main>
		</>
	)
}

export default Calculator
