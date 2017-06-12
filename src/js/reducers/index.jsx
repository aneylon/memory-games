import { combineReducers } from 'redux'
import UserInfoReducer from './userInfoReducer'

const rootReducer = combineReducers({
  userInfo: UserInfoReducer
})

export default rootReducer
