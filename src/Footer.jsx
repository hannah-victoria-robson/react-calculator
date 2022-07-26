import React from 'react'

function Footer() {
	return (
		<>
			<section className="footer">
				<ul className="footer-list">
					<li className="footer-list-item built-by">Built by Hannah Robson </li>
					<li>
						<a href="https://github.com/hannah-victoria-robson/react-calculator">
							View code on github
						</a>
					</li>
					<li className="footer-list-item">
						<a href="#">View Portfolio</a>
					</li>
					<li className="footer-list-item">
						<a href="https://www.linkedin.com/in/hannahvrobson/">
							View Linkedin
						</a>
					</li>{' '}
				</ul>
			</section>
		</>
	)
}

export default Footer
