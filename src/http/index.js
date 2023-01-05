import axios from 'axios'

const http = axios.create({
	baseURL: 'https://kettik-kg-server.herokuapp.com/',
})


http.interceptors.request.use(function (config) {
	const token = localStorage.getItem('JWT_ACCESS_TOKEN')
	config.headers.authorization = token

	return config
}, function (error) {
	return Promise.reject(error)
})

export { http }
