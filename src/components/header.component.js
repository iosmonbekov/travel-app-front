import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
	return <Navbar bg="light" expand="lg">
		<Container>
			<Navbar.Brand>Kettik-Kg</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link>Home</Nav.Link>
					<Nav.Link>My tours</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
}