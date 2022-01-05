import { BUY_CAKE } from "./cakeActionTypes"

export const buyCake = (number = 1) => {
    //default value set to 1 to ensure that existing functionality not breaking
    return {
        type: BUY_CAKE,
        payload: number
    }
}