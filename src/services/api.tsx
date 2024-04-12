import axios from 'axios'

export default axios.create({
  timeout: 30000,
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }  
});


