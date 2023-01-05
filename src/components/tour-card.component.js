import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({name, date, period, applied, capacity}) => {
	const percentage = applied * 100 / capacity

	return <div className="card p-3 mb-2">
		<div className="d-flex justify-content-between">
			<div className="d-flex flex-row align-items-center">
				<div className="ms-2 c-details">
					<h6 className="mb-0">{ date }</h6> <span>{ period }</span>
				</div>
			</div>
		</div>
		<div className="mt-5">
			<h3 className="heading">{ name }</h3>
			<div className="mt-5">
				<div className="progress">
					<div className="progress-bar" role="progressbar" style={{'width': `${percentage}%`}} aria-valuemin="0" aria-valuemax="100"></div>
				</div>
				<div className="mt-3"> <span className="text1">{ applied } Applied <span className="text2">of { capacity } capacity</span></span> </div>
			</div>
		</div>
	</div>
}


Card.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	period: PropTypes.string,
	applied: PropTypes.number,
	capacity: PropTypes.number,
}
