import React from 'react';
import ToggleButton from './ToggleButton';
import MenuButton from './MenuButton';

const Navbar = (props)=> {
    const {toggleButtonFunction, darkMode} = props;
    const deviceWidth = window.innerWidth;
    return (
        <nav className = "nav">
            <ul className = "nav-items">
                <li className = "nav-head"><a href = "">Portfolio</a></li>
                {(deviceWidth>=1450) && <li className = "nav-home nav-links nav-first-link"><a href = "#hero">Home</a></li>}
                {(deviceWidth>=1450) && <li className = "nav-about nav-links"><a href = "#About">About</a></li>}
                {(deviceWidth>=1450) && <li className = "nav-about nav-links"><a href = "#Projects">Projects</a></li>}
                {(deviceWidth>=1450) && <li className = "nav-contact nav-links nav-last-link"><a href = "#Contact">Contact</a></li>}
                {(deviceWidth<1450) && <MenuButton />}
            </ul>
        </nav>
    )
}

export default Navbar;