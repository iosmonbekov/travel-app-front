import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Header, Card } from '@components'
import {  } from '@services'


export const Home = () => {
	// const navigate = useNavigate()
	const [tours] = useState([])

	useEffect(() => {
		
	}, [])


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
		</div>
	</>
}
