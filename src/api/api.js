import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.stackexchange.com/2.2/'
})

export const postsApi = {
    getPosts() {
        return instance.get('search?pagesize=100&intitle=react&site=stackoverflow')
            .then(response => response.data)
    }
}