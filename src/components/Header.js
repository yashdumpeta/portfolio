import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link className='Home' to="/">Home</Link>
                <Link className='Projects' to="/projects">Projects</Link>
            </nav>
        </header>
    );
}

export default Header
