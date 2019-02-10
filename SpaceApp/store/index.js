import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import playerReducer from './reducers/player'
import teammatesReducer from './reducers/teammates'

const reducer = combineReducers({
  player: playerReducer,
  teammates: teammatesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store