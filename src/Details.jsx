import React from 'react'

function Details() {
	return (
		<>
			<section className="details-section">
				<details className="details-item">
					<summary>Project Details</summary>

					<p>Stack used: HTML, CSS, React, Jest</p>

					<p>
						Design: The calculator design is based off of the mac desktop
						calculator app. This was done as a way to practice front-end styling
						from a design brief.
					</p>
					<p>
						Functionality: The functionality of this calculator is also based on
						the mac desktop calculator app
					</p>
					{/* <p>Stack used: HTML, CSS, React, Jest</p> */}
				</details>
			</section>
		</>
	)
}

export default Details
