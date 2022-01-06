import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/index'

function UserContainer({userData, fetchUsersAction}) {
    useEffect(()=> {
        fetchUsersAction()
        console.log(userData)
    },[])
    //[] array means fetchUsers execute only once
    return userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <>
            <h2>User List</h2>
            <div>
                {userData && 
                userData.users && 
                userData.users.map(user => <p>{user.name}</p>)}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersAction: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserContainer)