import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

//create cake store with cakeReducer as a parameter
const store = createStore(cakeReducer)

//now we need to connect the store with our rect application. 
// for that import provider and provide store to the react application in App.js
export default store