import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'


export const Card = ({ tour }) => {
	const period = dayjs(tour.endDate).diff(dayjs(tour.startDate), 'day')  

	return <div className="card p-3 mb-2">
		<div className="d-flex justify-content-between">
			<div className="d-flex flex-row align-items-center">
				<div className="ms-2 c-details">
					<h6 className="mb-0">{ tour.startDate }</h6> 
					<span>{ period } days</span>
				</div>
			</div>
		</div>
		<div className="mt-5">
			<h3 className="heading">{ tour.name }</h3>
			<div className="mt-5">
				<div className="progress">
					<div className="progress-bar" role="progressbar" style={{'width': `${tour.users.length * 100 / tour.capacity}%`}}></div>
				</div>
				<div className="mt-3"> 
					<span className="text1">
						{ tour.users.length } Applied 
						<span className="text2">of { tour.capacity } capacity</span>
					</span> 
				</div>
			</div>
		</div>
	</div>
}


Card.propTypes = {
	tour: PropTypes.object,
}
