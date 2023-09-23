import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
  url: BASE_URI,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '03df142dd6mshb181c64b5f7fa27p15d235jsn09b55be0948f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
}