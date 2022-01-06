import React from 'react'
import {connect} from 'react-redux'
import {buyIceCreams} from '../redux/index'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice cream {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCreams}>Buy ice cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCreams: () => dispatch(buyIceCreams())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
