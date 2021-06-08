import { GET_WEATHER_BY_CITY } from '../../../constants'

const INITIAL_STATE = {
  didInvalidate: false,
  isFetching: false,
  weather: null,
}

const calculateBeersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${GET_WEATHER_BY_CITY}_FULFILLED`: {
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        weather: payload.weather,
      }
    }
    case `${GET_WEATHER_BY_CITY}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
      }
    }
    case `${GET_WEATHER_BY_CITY}_PENDING`: {
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

export { calculateBeersReducer }
