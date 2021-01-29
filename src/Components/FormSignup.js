import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    We want to hear from you! Leave us your feedback and we will be sure to get in touch with you soon!
        </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Full Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your Full Name'
                        value={values.firstname}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Phone Number</label>
                    <input
                        className='form-input'
                        type='phonenumber'
                        name='phonenumber'
                        placeholder='Enter your Phone Number'
                        value={values.phonenumber}
                        onChange={handleChange}
                    />
                    {errors.phonenumber && <p>{errors.phonenumber}</p>}
                    <label className='form-label'>Feedback</label>
                    <textarea placeholder='Give us your feedback!' rows="4" cols="50" name="comment" form="usrform">
                    </textarea>
                </div>
                {/* <textarea rows="4" cols="50" name="comment" form="usrform">
                    Give us your feedback</textarea> */}
                <button className='form-input-btn' type='submit'>
                    Submit
        </button>

            </form>
        </div>
    );
};

export default FormSignup;