import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2ab6bc7e428247faaa772a5d62569a93',
    },
})

export default apiClient
