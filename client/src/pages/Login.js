import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <section>
            <form className='container login-container'>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <div className='login-button-container'>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </form>
        </section>
    )
}

export default Login