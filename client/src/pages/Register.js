import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Register = () => {

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        if (userDetails.password === userDetails.confirmPassword) {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({
                    'username': userDetails.username,
                    'password': userDetails.password
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.status !== 200) {
                alert('Registration Failed')
            }
        } else {
            console.log('Passwords do not match')
        }
    }

    return (
        <section>
            <form className='container login-container'>
                <input
                    type='text'
                    placeholder='Username'
                    value={userDetails.username}
                    onChange={(e) => setUserDetails({
                        username: e.target.value,
                        password: userDetails.password,
                        confirmPassword: userDetails.confirmPassword
                    })}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={userDetails.password}
                    onChange={(e) => setUserDetails({
                        username: userDetails.username,
                        password: e.target.value,
                        confirmPassword: userDetails.confirmPassword
                    })}
                />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={userDetails.confirmPassword}
                    onChange={(e) => setUserDetails({
                        username: userDetails.username,
                        password: userDetails.password,
                        confirmPassword: e.target.value
                    })}
                />
                <div className='login-button-container'>
                    <Link to='/'><button onClick={submitHandler}>Register</button></Link>
                </div>
            </form>
        </section>
    )
}

export default Register