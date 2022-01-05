/* reducer is a fuction that accept state and action as paramentrs
resposible to update the store with payload values
*/
import { BUY_CAKE } from "./cakeActionTypes";

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer