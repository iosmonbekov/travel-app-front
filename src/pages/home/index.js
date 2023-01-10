import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Header, Card } from '@components'
import { tourService } from '@services'

export const Home = () => {
	// const navigate = useNavigate()
	const [tours, setTours] = useState([])

	useEffect(() => {
		getTours()
	}, [])

	const getTours = async () => {
		const tours = await tourService.getAllTours()
		setTours(tours)
	} 

	return <>
		<Header />
		<div className="container p-4">
			<h1>Home Page (Under Construction)</h1>

			<div className="container mt-5 mb-3">
				<div className="row">
					{ 
						tours.map(tour => <div key={tour.name} className="col-md-4">
							<Card name={tour.name} date={tour.startDate} period={'1 day'} applied={tour.users.length} capacity={Number(tour.capacity)} />
						</div>)
					}
				</div>
			</div>
		</div>
	</>
}
