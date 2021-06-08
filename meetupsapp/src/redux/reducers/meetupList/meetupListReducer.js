import { GET_WEATHER_BY_LAT_LNG } from '../../../constants'

const INITIAL_STATE = {
  didInvalidate: false,
  isFetching: false,
  weatherLatLng: null,
}

const meetupListReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${GET_WEATHER_BY_LAT_LNG}_FULFILLED`: {
      console.log('payload', payload)
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        weatherLatLng: payload.weather,
      }
    }
    case `${GET_WEATHER_BY_LAT_LNG}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
      }
    }
    case `${GET_WEATHER_BY_LAT_LNG}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    }
    default:
      return state
  }
}

export { meetupListReducer }
