import React, {useRef} from 'react';
import loginImage from './loginImage.svg';

const Login = ({containerRef}) => {

    const containerVal = useRef(containerRef);
    return (
        <div className='base-container' ref={containerVal}>
            <div className='header'>
                 Login
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
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' placeholder='********'/>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <button type='button' className='btn-login'> Login </button>
            </div>
        </div>
    )
}

export default Login
