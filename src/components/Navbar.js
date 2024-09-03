import React from 'react';
import './Navbar.css';
import Logo from './Logo';

function Navbar() {

    return (
        <nav className='navbar'>
            <Logo /> {/* or <img src="path_to_lgo" alt="Logo" className="logo" /> */}
        <ul className='nav-links'>
            <li><a href='section1'>Section 1</a></li>
            <li><a href='section2'>Section 2</a></li>
            <li><a href='section3'>Section 3</a></li>
        </ul>
        </nav>

    );
}

export default Navbar;
