import { http } from '@http'

class UserService {
	async getAllUsers() {
		const { data } = await http.get('/users')
		return data
	}
}

export const userService = new UserService()
