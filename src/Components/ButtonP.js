import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonP.css';

const ButtonP = () => {
    return (
        <>
            <Link to='/products'>
                <button>
                    Purchase Services for $2500.00
                
            </button>
            </Link>
        </>
    )
}

export default ButtonP
