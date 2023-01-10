import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '@components'
import { tourService } from '@services'

export const TourPage = () => {
	// eslint-disable-next-line
    const [tour, setTour] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getTour(id)
	}, [])

	const getTour = async (id) => {
		const tour = await tourService.getTourById(id)
		setTour(tour)
	}

	return <>
		<Header />
		<div className="container p-4">
			<div className="row">

				<div className="col-md-6 mt-2">
					<img className="img-fluid details-img" src={tour.image} alt="" />
				</div>
				<div className="col-md-6 mt-2">

					<h3>{ tour.name }</h3>
					<h3>${ tour.price }</h3>

					<button name="add_to_cart" type="submit" className="btn btn-primary btn-lg">Register for tour</button>


					<p className="par-title mt-4 mb-1">About this tour:</p>
					<p className="dummy-description mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis assumenda voluptatem tempore dolor quod. Expedita, id, minus similique dolor sed adipisci aliquam natus amet doloremque delectus cupiditate? Sint, quasi, ad necessitatibus omnis quaerat tenetur corporis porro aut, natus ex ab id vel odit veniam fugiat temporibus aperiam quia rem minima!
					</p>
				</div>
			</div>
		</div>
	</>
}
