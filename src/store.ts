import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers = compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store