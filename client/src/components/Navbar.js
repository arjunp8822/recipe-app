import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='nav'>
            <Link to='/'>AP Recipes</Link>
            <div className='auth-container'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default Navbar