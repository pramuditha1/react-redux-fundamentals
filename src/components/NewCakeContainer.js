import React, { useState } from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/index'

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => setnumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy Cakes</button>
        </div>
    )
}

/*
step 1
we need to use store in the component and update the store.
for that we use mapStateToProps function taking state as a parameter and return a object.
this function add additinal prop numOfCakes to the component which value is stored in redux store

---- react redux documentation tells about selectors. 
---- what selector do is a seperate function having mapStateToProps functions
*/
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

/*
step 2
map dispatch action which is buyCake to props because we need this action in button click event
*/
const mapDispatchToProps = dispatch => {
    //arrow function accepting parameter name called number
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

/*
setp 3 connect mapStateToProps and mapDispatchToPros with component
connect function connect component with redux store
we need to import connect from react-redux
*/
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)
