import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'//to make asynchronous actions like api calls, db calls

//create cake store with cakeReducer as a parameter
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

//now we need to connect the store with our rect application. 
// for that import provider and provide store to the react application in App.js
export default store