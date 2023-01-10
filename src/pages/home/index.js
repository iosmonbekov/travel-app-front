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
		<div className="container">
			<h1>Kettik Tours</h1>

			<div className="container mt-5 mb-3">
				<div className="d-flex justify-content-center align-items-center flex-wrap">
					{ 
						tours.map(tour => <Card key={tour.id} tour={tour} onReadMore={() => navigate(`/tour/${tour.id}`)} />)
					}
				</div>
			</div>
		</div>
	</>
}
