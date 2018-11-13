import axios from "axios"

const basePath = "/api"

const api = axios.create({
	baseURL: basePath
})

export default api