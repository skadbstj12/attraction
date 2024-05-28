import React from 'react'
import { FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><FaYoutube /></em>
                <span>movie <br /><i>youtube</i></span>
            </Link>
        </h1>
    )
}

export default Logo
