import axios from 'axios'

const http = axios.create({
	baseURL: 'https://kettik-kg-server.herokuapp.com/',
	// baseURL: 'http://localhost:8080/'
})


http.interceptors.request.use((request) => {
	const token = localStorage.getItem('JWT_ACCESS_TOKEN')
	// @ts-ignore-next-line
	request.headers.authorization = token
	return request
}, (error) => {
	return Promise.reject(error)
})

http.interceptors.response.use((response) => {
	return response
}, (error) => {
	switch (error.response.status) {
	case 403:
		location.href = location.origin + '/sign-in'
		break
	default:
		break
	}
	return Promise.reject(error)
})

export { http }
