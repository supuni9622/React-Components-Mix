import React from 'react';
import loginImage from './loginImage.svg';

const Register = () => {
    return (
        <div className='base-container'>
            <div className='header'>
                 Register
            </div>
            <div className='content'>
                <div className='image'>
                    <img src={loginImage} alt='login'/>
                </div>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='userName'>User Name</label>
                        <input type='text' name='userName' placeholder='supuni96'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' placeholder='supuni123@gmail.com'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' placeholder='********'/>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <button type='button' className='btn'> Register </button>
            </div>
        </div>
    )
}

export default Register