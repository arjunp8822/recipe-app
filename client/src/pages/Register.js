import React from 'react'
import './Login.css'

const Register = () => {
    return (
        <section>
            <form className='container login-container'>
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <input type='password' placeholder='Confirm Password' />
                <div className='login-button-container'>
                    <button>Register</button>
                </div>
            </form>
        </section>
    )
}

export default Register