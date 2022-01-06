import React from 'react'
import {connect} from 'react-redux'
import {buyCake, buyIceCreams} from '../redux/index'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item {props.itemName}- {props.item}</h2>
            <button onClick={props.buyItem}>Buy Cakes</button>
        </div>
    )
}
/*
we can render component conditionaly by using a prop passing from app.js
ex: <ItemContainer cake/>

*/
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    const itemName = ownProps.cake ? 'cake' : 'ice cream'
    console.log(`ownProps ${ownProps.cake}`)
    return {
        item: itemState,
        itemName: itemName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    //return buyCake or buyIceCream function
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCreams())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
