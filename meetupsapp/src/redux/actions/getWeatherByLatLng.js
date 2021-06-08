import { API_BASE_URL } from '../../config';
// import axios from 'axios'
import { GET_WEATHER_BY_LAT_LNG } from '../../constants'

export const getWeatherByLatLng = (lat,lng) => ({
  type: GET_WEATHER_BY_LAT_LNG,
  payload: async () => {
    console.log('latlng', lat)
    console.log('latlng', lat)
    const res = await fetch(`${API_BASE_URL}/api/weather/latlng`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ lat, lng })
    })

    const data = await res.json()
    // console.log(res)
    if (res.ok) return data
    throw data
  },
})

