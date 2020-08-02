import { combineReducers } from 'redux'
import { AuthReducer } from './auth/reducers'
import { SampleReducer } from './sample/reducers'

export default combineReducers({
    auth: AuthReducer,
    sample: SampleReducer,
})