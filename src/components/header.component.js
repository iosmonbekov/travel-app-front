import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
	const navigate = useNavigate()

	const logout = () => {
		localStorage.clear()
		navigate('/sign-in')
	}

	return <Navbar bg="light" expand="lg">
		<Container>
			<Navbar.Brand>Kettik-Kg</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="me-auto">
					<Nav.Link>Home</Nav.Link>
					<Nav.Link>My tours</Nav.Link>
				</Nav>
				<button onClick={logout} className='btn btn-light'>
					Logout
				</button>
			</Navbar.Collapse>
		</Container>
	</Navbar>
}