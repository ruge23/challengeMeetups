import { API_BASE_URL } from '../../config';
// import axios from 'axios'
import { GET_WEATHER_BY_CITY } from '../../constants'

export const getWeatherByCity = (city) => ({
  type: GET_WEATHER_BY_CITY,
  payload: async () => {
    const res = await fetch(`${API_BASE_URL}/api/weather/bycity`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ city })
    })

    const data = await res.json()
 
    if (res.ok) return  data
    throw data
  },
})

