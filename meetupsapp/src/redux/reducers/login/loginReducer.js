import { SET_USERNAME } from '../../../constants'

const INITIAL_STATE = {
  didInvalidate: false,
  isFetching: false,
  username: null,
}

const loginReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${SET_USERNAME}`: {
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        username: payload.email,
      }
    }
    case `${SET_USERNAME}_FULFILLED`: {
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        username: payload.email,
      }
    }
    case `${SET_USERNAME}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
      }
    }
    case `${SET_USERNAME}_PENDING`: {
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

export { loginReducer }
