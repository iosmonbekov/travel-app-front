import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

export const Header = () => {
	const navigate = useNavigate()
	const [state, setState] = useState(window.innerWidth > 992 ? true : false)

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
					<NavLink className="nav-item nav-link" to="/">Home</NavLink>
					<NavLink className="nav-item nav-link" to="/my-tours">My tours</NavLink>
				</div>
				<button onClick={logout} className='m-l-auto btn btn-light'>
					Logout
				</button>
			</div>
		}
	</nav>
}