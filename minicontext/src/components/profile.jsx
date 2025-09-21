import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <h2>Please log in</h2>;
    }
    return (
        <>
            
            <h2>Profile</h2>
            <p>Welcome, {user.username}!</p>
        </>

    )
}

export default Profile
