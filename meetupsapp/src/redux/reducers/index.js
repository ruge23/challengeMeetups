import { combineReducers } from 'redux'

import { calculateBeersReducer } from './calculateBeers'
import { loginReducer } from './login'
import { meetupListReducer } from './meetupList'

const rootReducer = combineReducers({
  calculateBeers: calculateBeersReducer,
  meetupList: meetupListReducer,
  app: loginReducer
})

export { rootReducer }