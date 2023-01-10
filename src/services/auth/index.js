import { http } from '@http'

class AuthService {
	async signIn(user) {
		try {
			const { data } = await http.post('auth/sign-in', user)
			const token = data.token

			localStorage.setItem('JWT_ACCESS_TOKEN', token)
			return
		} catch (e) {
			throw Error(e.response.data.error)
		}
	}

	async signUp(user) {
		try {
			const { data } = await http.post('auth/sign-up', user)
			localStorage.setItem('JWT_ACCESS_TOKEN', data.token)
		} catch (e) {
			throw Error(e.response.data.error)
		}
        
	}
}

export const authService = new AuthService()
