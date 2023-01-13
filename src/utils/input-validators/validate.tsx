export const validate = (validators: Array<(value: string) => string | undefined>) => {

	return (value: string) => {
		for (let validator of validators) {
			const error = validator(value)
			if (error) return error
		}
    
		return null
	}
}
