import React from 'react'

function Details() {
	return (
		<>
			<section className="details-section">
				<details className="details-item">
					<summary>Project Details</summary>
					<p>
						Stack used: HTML, CSS, React, <a href="https://jestjs.io/"> Jest</a>
						,&nbsp;
						<a href="https://www.npmjs.com/package/react-draggable">
							Draggable
						</a>
					</p>
					<p>
						Design: The calculator design is based off of the mac desktop
						calculator app. This was done as a way to practice front-end styling
						from a design brief.
					</p>
					<p>
						Functionality: The functionality of this calculator is also based on
						the mac desktop calculator app.
					</p>
					<p>
						<a href="https://github.com/hannah-victoria-robson/react-calculator">
							Project repo on Github
						</a>
					</p>
				</details>
			</section>
		</>
	)
}

export default Details
