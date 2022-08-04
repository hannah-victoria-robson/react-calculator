import React from 'react'

function Details() {
	return (
		<>
			<section className="details-section">
				<details className="details-item">
					<summary>Project Details</summary>
					<ul>
						<li className="details-list-item">
							<p>
								Stack used: HTML, CSS, Javascript, React,{' '}
								<a href="https://jestjs.io/"> Jest</a>
								,&nbsp;
								<a href="https://www.npmjs.com/package/react-draggable">
									Draggable
								</a>
							</p>
						</li>
						<li className="details-list-item">
							<p>
								Design: The calculator design is based off of the mac desktop
								calculator app. This was done as a way to practice front-end
								styling from a design brief.
							</p>
						</li>
						<li className="details-list-item">
							<p>
								Functionality: The functionality of this calculator is also
								based on the mac desktop calculator app.
							</p>
						</li>
						<li className="details-list-item">
							<p>
								<a href="https://github.com/hannah-victoria-robson/react-calculator">
									Project repo on Github
								</a>
							</p>
						</li>
						<li className="details-list-item">
							<p>
								Main focus: Functions, testing functions using Jest. <br />
								Files of note:
								<ul>
									<li>
										<a href="https://github.com/hannah-victoria-robson/react-calculator/blob/main/src/functions.js">
											functions.js
										</a>{' '}
									</li>
									<li>
										<a href="https://github.com/hannah-victoria-robson/react-calculator/blob/main/src/functions.test.js">
											functions.test.js
										</a>{' '}
									</li>
								</ul>
							</p>
						</li>
					</ul>
				</details>
			</section>
		</>
	)
}

export default Details
