export const required = (message: string = 'Required') => {
	return (value: string) => {
		if (!value) return message
	}
}

export const email = (message: string = 'Invalid email address') => {
	return (value: string) => {
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return message
	}
}

export const min = (min: number, message: string = `Minimum value is ${min}`) => {
	return (value: string) => {
		if (value.length <= min) return message
	}
}

export const max = (max: number, message = `Maximum values is ${max}`) => {
	return (value: string) => {
		if (value.length >= max) return message
	}
}

export const same = (expectedValue: string, message = 'Not same') => {
	return (value: string) => {
		if (value !== expectedValue) return message
	}
}
