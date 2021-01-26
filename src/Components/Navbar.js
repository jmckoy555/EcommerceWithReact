import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    // Setting state for the click on menu, intial state is false to have the hamburger.
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    // This function toggles back and sets the click to true. Initiating the function.
    const handleClick = () => setClick(!click);
    // This function is closing the menu in the mobile view
    const closeMobileMenu = () => setClick(false)

    // Function that displays button depending on screensize
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };



    // Whenever you resize I want the button function to be implemented.
    window.addEventListener('resize', showButton);

    // Hides the button in mobile view even if you refresh the page.
    useEffect(() => {
        showButton();
    }, []);



    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i class="fab fa-cuttlefish"></i>
                    </Link>
                    <div
                        // Created a function to toggle onclick of the menu icon.
                        className='menu-icon' onClick={handleClick}>

                        {/* We are setting state on the hamburger menu to toggle back and forth between the 'x' and three lines */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/*Makes the list disappear on the click. */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Us!</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
