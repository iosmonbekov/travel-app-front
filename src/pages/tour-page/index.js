import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Header } from '@components'
import { tourService } from '@services'
import './index.scss'

export const TourPage = () => {
	const [tour, setTour] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getTour(id)
		console.log(tour)
	}, [])

	const getTour = async (id) => {
		const tour = await tourService.getTourById(id)
		setTour(tour)
	}

	const register = async (id) => {
		try {
			await tourService.registerForTour(id)
			await getTour()
		} catch (e) {
			toast.error(e.message)
		}
	}

	return <>
		<Header />
		<div className="container p-4 tour-details-page">

			<div className="card-container">
				<div className="image-container">
					<img src={tour.image} />
				</div>
				<div className="text-area">
					<div className="heading-area">
						<h2>{tour.name}</h2>
						<h4>{tour.startDate} : {tour.endDate}</h4>
					</div>

					<p className="paragraph-area">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum asperiores error omnis pariatur sequi placeat quia fuga ullam. Harum obcaecati suscipit illum similique excepturi voluptates quae deserunt tempore, distinctio architecto ipsum dolor laboriosam inventore impedit nostrum totam eaque sed est? Non rem repudiandae, vitae iure suscipit pariatur, cum esse sequi cumque saepe commodi reprehenderit quaerat. Quasi ipsam repellendus similique
					</p>


					<div className="price-and-buy-btn">
						<h2 className="price">${tour.price}</h2>

						{
							tour.registered
								? <button className="buy-btn">
									You are registered
								</button>
								: <button onClick={() => register(tour.id)} className="buy-btn">
									Register for tour
								</button>
						}
					</div>
				</div>
			</div>
		</div>
	</>
}
