import { http } from '@http'

class UserService {
	async getAllUsers() {
		try {
			const { data } = await http.get('/users')
			return data
		} catch (e) {
			throw Error(e.response.data.error)            
		}
	}
}

export const userService = new UserService()
