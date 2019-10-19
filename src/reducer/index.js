import { combineReducers } from 'redux'

import user from './user/index'
import distrito from './distrito'

const reducers = combineReducers({
  user,
  distrito,
})

export default reducers
