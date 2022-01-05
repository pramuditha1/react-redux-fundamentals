import React from 'react'
//we use useSelector which is similar to mapStateToProps and mapDispatchToProps used in normal react redux cake example
//useDispatch is similar to mapDispatchToProps
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux/index'

function HooksCakeContainer() {
    //Similar to mapStateToProps
    //access the redux store and assign numOfCakes to a const variable
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
