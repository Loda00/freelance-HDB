import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.common = {
  Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('jwt'))}`,
}

const httpRequest = async (page) => {
  const res = await axios.get(page)
  console.log('resresres', res)
  return res.data
}

export default httpRequest
