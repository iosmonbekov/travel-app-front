import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export const NotFoundPage = () => {
	return <div className='not-found-page'>
		<header className="top-header">
		</header>

		<div>
			<div className="starsec"></div>
			<div className="starthird"></div>
			<div className="starfourth"></div>
			<div className="starfifth"></div>
		</div>

		<section className="error">
			<div className="error__content">
				<div className="error__message message">
					<h1 className="message__title">Page Not Found</h1>
					<p className="message__text">We&apos;re sorry, the page you were looking for isn&apos;t found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
				</div>
				<div className="error__nav e-nav">
					<Link to="/sign-up" className="e-nav__link"></Link>
				</div>
			</div>
		</section>
	</div>
}
