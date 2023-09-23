import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const REPID_API_KEY=process.env.REACT_APP_PUBLIC_KEY
const options = {
  method: 'GET',
  url: BASE_URI,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': REPID_API_KEY.toString(),
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
}