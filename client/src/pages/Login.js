import React, { useState } from 'react'
import './Login.css'
import { Link, Navigate, redirect } from 'react-router-dom'

const Login = () => {

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    })

    const [redirect, setRedirect] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify({
                    'username': userDetails.username,
                    'password': userDetails.password
                }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            if (response.ok) {
                setRedirect(true)
            } else {
                alert('Username or password incorrect')
            }
        } catch (e) {
            console.log(e)
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <section>
            <form className='container login-container' onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder='Username'
                    value={userDetails.username}
                    onChange={(e) => setUserDetails({
                        username: e.target.value,
                        password: userDetails.password
                    })}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={userDetails.password}
                    onChange={(e) => setUserDetails({
                        username: userDetails.username,
                        password: e.target.value
                    })}
                />
                <div className='login-button-container'>
                    <button>Login</button>
                    <Link to='/register'><button>Register</button></Link>
                </div>
            </form>
        </section>
    )
}

export default Login