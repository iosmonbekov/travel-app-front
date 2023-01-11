import { http } from '@http'

class TourService {
	async getAllTours() {
		try {
			const { data } = await http.get('/tours')
			return data
		} catch (e) {
			throw Error(e.response.data.error)            
		}
	}

	async getTourById(id) {
		try {
			const { data } = await http.get(`/tours/${id}`)
			return data
		} catch (e) {
			throw Error(e.response.data.error)            
		}
	}

	async getMyTours() {
		try {
			const { data } = await http.get('/tours/my-tours')
			return data
		} catch (e) {
			throw Error(e.response.data.error)            
		}
	}

	async registerForTour(id) {
		try {
			return await http.post(`/tours/${id}`) 
		} catch (e) {
			throw Error(e.response.data.error)            
		}
	}
}

export const tourService = new TourService()
