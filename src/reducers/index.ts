import cart from './cart'
import shop from './shop'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cart,
    shop
})

export default rootReducer