import { createStore } from 'redux'
import userReducer from './userdata'

const store = createStore(userReducer)

export default store