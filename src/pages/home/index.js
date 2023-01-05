import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

import { http } from '@http'

export const Home = () => {
	const navigate = useNavigate()
	const [users, setUsers] = useState([])

	useEffect(() => {
		getAllUsers()
	}, [])

	const getAllUsers = async () => {
		try {
			const { data } = await http.get('/users')
			setUsers(data)
		} catch (error) {
			if (error.response.status === 403) navigate('/sign-in')
		}
	}


	return <div className="container p-4">
		<h1>Home Page (Under Construction)</h1>

		{ users.map((user, index) => <Card key={user.email} body>
			<strong>{ index + 1 }: </strong> { user.email }
		</Card>
		)}
	</div>
}
