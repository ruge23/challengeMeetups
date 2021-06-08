import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { rootReducer } from './reducers'

const middlewares = [thunk, promise]

if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger())

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export { store }
