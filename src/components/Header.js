import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="main-container">
            <header>
                <nav className="navbar">
                    <div className="navbar-left">
                        <Link className="home-button" to="/">
                            yash d
                        </Link>
                    </div>
                    <div className="navbar-right">
                        <Link className='home' to="/">Home</Link>
                        <Link className='Projects' to="/projects">Projects</Link>
                        <Link className='resume'>Resume</Link>
                        <Link className="socials">Contacts</Link>
                    </div>
                    <div ></div>
                </nav>
            </header>
        </div>
    );
}

export default Header
