import { applyMiddleware, compose, createStore } from 'redux'
import reducerUser from '../reducers/reducerUser'
import thunk from 'redux-thunk'

// let arr = [midl1, midl2, thunk]

const composeEnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducerUser, composeEnancers(applyMiddleware(thunk)))
// const store = createStore(reducerUser, composeEnancers(applyMiddleware(...arr)))

export default store