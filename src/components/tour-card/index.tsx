import dayjs from 'dayjs'
import { Tour } from '../../types/models'
import { Caller } from '../../types/support'

import './index.scss'

export const Card = ({ tour, onReadMore }: { tour: Tour, onReadMore: Caller}) => {
	const period = dayjs(tour.endDate).diff(dayjs(tour.startDate), 'day')

	return <>
		<div className='card-tour m-2 loading'>
			<img className='card-tour-img' src={tour.image} />
			<div className="card-info">
				<h1>{ tour.name }</h1>
				<h3> { period } days</h3>
				<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
				<button onClick={onReadMore} className='btn btn-light'>Read More</button>
			</div>
		</div>
	</>
}

