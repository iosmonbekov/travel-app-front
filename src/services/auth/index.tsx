import { http } from '../../http'
import { AuthForm } from '../../types/forms'

class AuthService {
	async signIn(form: AuthForm) {
		try {
			const { data } = await http.post('auth/sign-in', form)
			const token = data.token

			localStorage.setItem('JWT_ACCESS_TOKEN', token)
			return
		} catch (e: any) {
			throw Error(e.response.data.error)
		}
	}

	async signUp(form: AuthForm) {
		try {
			const { data } = await http.post('auth/sign-up', form)
			localStorage.setItem('JWT_ACCESS_TOKEN', data.token)
		} catch (e: any) {
			throw Error(e.response.data.error)
		}
        
	}
}

export const authService = new AuthService()
