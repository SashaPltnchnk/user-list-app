import { combineReducers } from 'redux'
import global from './global'


const reducers = {
  global,
}

export default combineReducers(
  reducers
)