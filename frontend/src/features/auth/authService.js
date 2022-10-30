import axios from 'axios'

const API_URL = "/api/"

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem(API_URL, JSON.stringify(response.data))
    }

    return response.data
}

const authService = { register }

export default authService