import React, { useState } from 'react';
import './Form.css';
import FormSignup from '../Components/FormSignup';
import FormSuccess from '../Components/FormSucccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='/images/SignUpEd.png' alt='spaceship' />

                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </div>
        </>
    );
};

export default Form;