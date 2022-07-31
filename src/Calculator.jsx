import React, { useState } from 'react'
import {
	RiDivideLine,
	RiAddLine,
	RiSubtractLine,
	RiPercentLine,
	RiCloseLine,
} from 'react-icons/ri'
import { TbEqual } from 'react-icons/tb'
import { isNumber, handleNumbers, handleOperators } from './functions'

function Calculator() {
	const [output, setOutput] = useState({
		firstOperand: '0',
		operator: '0',
		secondOperand: '0',
		sum: 0,
		output: '0',
		lastOperator: '0',
		lastSecondOperand: '0',
		fontSize: '55px',
		clearButton: 'AC',
	})

	function setNewOutput(output) {
		const outputCopy = { ...output }
		setOutput(outputCopy)
	}

	function handleClick(event) {
		const newInput = event.currentTarget.value
		if (isNumber(newInput)) {
			const numbers = handleNumbers(output, newInput)
			setNewOutput(numbers)
		} else {
			const operators = handleOperators(output, newInput)
			setNewOutput(operators)
		}
	}

	return (
		<>
			<main>
				<section className="calc-container">
					<div className="calculator">
						<div className="top-bar">
							<div className="red"></div>
							<div className="yellow"></div>
							<div className="green"></div>
						</div>
						<output className="output" id="handle">
							<span
								className="output-text"
								style={{ fontSize: output.fontSize }}
							>
								{output.output}
							</span>
						</output>
						<button className="AC top" value={'AC'} onClick={handleClick}>
							{output.clearButton}
						</button>
						<button
							className="number-toggle top"
							value={'toggle'}
							onClick={handleClick}
						>
							+/-
						</button>
						<button
							className="percent top"
							value={'percent'}
							onClick={handleClick}
						>
							<RiPercentLine />
						</button>
						<button
							className="divide right"
							value={'divide'}
							onClick={handleClick}
						>
							<RiDivideLine />
						</button>
						<button
							className="multiply right"
							value={'multiply'}
							onClick={handleClick}
						>
							<RiCloseLine />
						</button>
						<button
							className="subtract right"
							value={'subtract'}
							onClick={handleClick}
						>
							<RiSubtractLine />
						</button>
						<button className="add right" value={'add'} onClick={handleClick}>
							<RiAddLine />
						</button>
						<button
							className="equals right"
							value={'equals'}
							onClick={handleClick}
						>
							<TbEqual />
						</button>
						<button className="nine" value={9} onClick={handleClick}>
							9
						</button>
						<button className="eight" value={8} onClick={handleClick}>
							8
						</button>
						<button className="seven" value={7} onClick={handleClick}>
							7
						</button>
						<button className="six" value={6} onClick={handleClick}>
							6
						</button>
						<button className="five" value={5} onClick={handleClick}>
							5
						</button>
						<button className="four" value={4} onClick={handleClick}>
							4
						</button>
						<button className="three" value={3} onClick={handleClick}>
							3
						</button>
						<button className="two" value={2} onClick={handleClick}>
							2
						</button>
						<button className="one" value={1} onClick={handleClick}>
							1
						</button>
						<button className="zero" value={0} onClick={handleClick}>
							0
						</button>
						<button className="decimal" value={'decimal'} onClick={handleClick}>
							.
						</button>
					</div>
				</section>
			</main>
		</>
	)
}

export default Calculator
