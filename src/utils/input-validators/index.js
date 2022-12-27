export const required = (message = 'Required') => {
	return (value) => {
		if (!value) return message
	}
}

export const email = (message = 'Invalid email address') => {
	return (value) => {
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return message
	}
}

export const min = (min, message = `Minimum value is ${min}`) => {
	return (value) => {
		if (value.length <= min) return message
	}
}

export const max = (max, message = `Maximum values is ${max}`) => {
	return (value) => {
		if (value.length >= max) return message
	}
}
