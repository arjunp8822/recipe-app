import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {

    const { userInfo, setUserInfo } = useContext(UserContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/profile', {
                credentials: 'include'
            })
            const userInfo = await response.json()
            setUserInfo(userInfo)
        }
        fetchData()

    }, [])

    const logoutHandler = async () => {
        const response = await fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null)
    }

    const username = userInfo?.username

    return (
        <nav id='nav'>
            <Link to='/'>AP Recipes</Link>
            <div className='auth-container'>
                {username && (
                    <>
                        <Link to='/create' className='username'>{username}</Link>
                        <Link to='/' onClick={logoutHandler}>Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar