import { 
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
 } from "./UserTypes";
 import axios from 'axios'

 export const fetchUsersRequest = () => {
     return {
         type: FETCH_USERS_REQUEST
     }
 }

 export const fetchUsersRequestSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
 }

 export const fetchUsersRequestFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
 }

// implement fetchUsers function to make an API call asynchronously
//returns a function
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersRequestSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersRequestFailure(errorMsg))
        })
    }
}