import React from 'react'
import {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleLogin = (e) =>{
        e.preventDefault();
        setUser({username, password})
    }
    return( 
    <>
        <h2>Login</h2>
        <input type="text" value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        placeholder='username' />
        <input type="password" value={password} 
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        placeholder='password' />
        <button onClick={handleLogin} >Login</button>
    </>
        
    )
}

export default Login
