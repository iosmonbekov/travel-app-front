export const validate = (validators) => {
	return (value) => {
		for (let validator of validators) {
			const error = validator(value)
			if (error) return error
		}
    
		return null
	}
}
