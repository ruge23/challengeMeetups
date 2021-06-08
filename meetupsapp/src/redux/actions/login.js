import { API_BASE_URL } from '../../config';
import { SET_USERNAME } from '../../constants'

export const login = (data) => ({
  type: SET_USERNAME,
  //TODO API
  // payload: async () => {
  //   const res = await fetch(`${API_BASE_URL}/api/login`, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': "application/json"
  //     },
  //     body: JSON.stringify({ email, password })
  //   })

  //   const data = await res.json()

  //   if (res.ok) return data
  //   throw data
  // },
  //TODO MOCK
  payload: async () => {

    // const data = await fetch('https://www.google.com/?hl=es')

    // if (data) return { email }
    return { email: data.email }
  },
})

