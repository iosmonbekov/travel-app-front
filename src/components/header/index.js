import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
	const navigate = useNavigate()
	const [state, setState] = useState(window.innerWidth > 720 ? true : false)

	const logout = () => {
		localStorage.clear()
		navigate('/sign-in')
	}

	const toggleMenu = () => {
		setState((prev) => {
			return !prev
		})
	}

	return <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
		<Link className="navbar-brand" to='/'>Navbar</Link>
		<button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse">
			<span className="navbar-toggler-icon"></span>
		</button>
		{
			state && <div className="collapse navbar-collapse d-flex justify-content-between">
				<div className="navbar-nav">
					<Link className="nav-item nav-link active" to="/">Home</Link>
					<Link className="nav-item nav-link" to="/my-tours">My tours</Link>
				</div>
				<button onClick={logout} className='m-l-auto btn btn-light'>
				Logout
				</button>
			</div>
		}
	</nav>
}