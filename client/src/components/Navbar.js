import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='nav'>
            <a href='/'>AP Recipes</a>
            <div className='auth-container'>
                <a href='/'>Login</a>
                <a href='/'>Register</a>
            </div>
        </nav>
    )
}

export default Navbar