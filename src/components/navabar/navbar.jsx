import React, { useState } from 'react';
import './navbar.css';
import logo from '../img/synergz-logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='body'>
            <div id="header">
                <div className="logo">
                    <a href="/aboutUs"><img src={logo} alt='logo' /></a>
                </div>
                <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                    <a href='/aboutUs'><button className='nav-btn bttn'>About Us</button></a>
                    <a href='/'><button className='nav-btn bttn'>Our Work</button></a>
                    <a href='/'><button className='nav-btn bttn'>Services</button></a>
                    <a href='/'><button className='nav-btn bttn'>Careers</button></a>
                    <a href='/'><button className='nav-btn bttn'>Contact Us</button></a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </div>
    );
}

export default Navbar;
