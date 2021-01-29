import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonP.css';

const ButtonSub = () => {
    return (
        <>
            <Link to='/contact'>
                <button className='btn--suboutline'>
                    Subscribe
            </button>
            </Link>
        </>
    )
}

export default ButtonSub