import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Card } from '@components'

import { http } from '@http'

export const Home = () => {
	const navigate = useNavigate()
	const [users, setUsers] = useState([])
	const [tours] = useState([
		{
			name: 'Ala-Archa',
			date: '12.12.2023',
			period: '2 days', 
			applied: 30, 
			capacity: 40
		},
		{
			name: 'Kara-Kol',
			date: '12.11.2023',
			period: '3 days', 
			applied: 34, 
			capacity: 46
		},
		{
			name: 'Chunkurchak',
			date: '12.12.2023',
			period: '1 day', 
			applied: 20, 
			capacity: 40
		},
	])

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


	return <>
		<Header />
		<div className="container p-4">
			<h1>Home Page (Under Construction)</h1>

			<div className="container mt-5 mb-3">
				<div className="row">
					{ 
						tours.map(tour => <div key={tour.name} className="col-md-4">
							<Card name={tour.name} date={tour.date} period={tour.period} applied={tour.applied} capacity={tour.capacity} />
						</div>)
					}
				</div>
			</div>

			<h3>Users: </h3>
			{ 
				users.map((user, index) => <div key={user.email}>
					<strong>{ index + 1 }: </strong> { user.email }
				</div>
				)
			}
		</div>
	</>
}
