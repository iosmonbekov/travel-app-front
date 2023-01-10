import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Card } from '@components'
import { tourService } from '@services'

export const Home = () => {
	const navigate = useNavigate()
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
						tours.map(tour => <div onClick={() => navigate(`/tour/${tour.id}`)} key={tour.name} className="col-md-4">
							<Card tour={tour} />
						</div>)
					}
				</div>
			</div>
		</div>
	</>
}
