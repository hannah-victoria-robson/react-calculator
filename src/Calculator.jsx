import React from 'react'

function Calculator() {
	return (
		<>
			<main>
				<section className="calc-container">
					<article>
						<header>Calculator</header>
						<div className="calculator">
							<output className="output"></output>
							<button className="AC">AC</button>
							<button className="number-toggle">+/-</button>
							<button className="percent">%</button>
							<button className="divide">/</button>
							<button className="multiply">X</button>
							<button className="subtract">-</button>
							<button className="add">+</button>
							<button className="equals">=</button>
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
					</article>
				</section>
			</main>
		</>
	)
}

export default Calculator
