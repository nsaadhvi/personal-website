import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import contactImg from "../assets/contact.png";
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className= "desktopMenu">
                <Link className="desktopMenuListItem" to="/">home</Link>
                <Link className="desktopMenuListItem" to="/about">about</Link>
                <Link className="desktopMenuListItem" to='#experience'>experience</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="contactImg" className="desktopMenuImg" />contact me
            </button>
        </nav>
    )
}

export default Navbar;