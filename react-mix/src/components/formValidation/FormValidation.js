import React, {useState, useCallback} from 'react';
import { validateAll } from 'indicative';

// Didn't work for me. Also there is no proper documentation

const FormValidation = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleChange = useCallback((e) => {
            setName(e.target.value);
            setEmail(e.target.value);
            setPassword(e.target.value);
            setPasswordConfirm(e.target.value);

        },[setName,setEmail,setPassword,setPasswordConfirm]);
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        // Validating user using indicative package
        //const data = {};
        // data.name = name;
        // data.email = email;
        // data.password = password;
        // data.passwordConfirm = passwordConfirm;
       // const data = name;

        const rules = {
            name : 'required|string',
            email : 'required|email',
            password : 'required|string|min:6|confirmed'
        };

        validateAll({name,email,password,passwordConfirm}, rules)
            .then(()=> {
                console.log('success');
            })
            .catch(e => {
                console.log(e); // show errors
            });

    },[name,email,password,passwordConfirm]);

    return (
        <div className='container'>
            <h1>Form Validation with indicative npm package</h1>
            <div className='card card-shadowed p-50 w-400 mb-0' style={{maxWidth:'100%'}}>
                <h5 className='text-center text-uppercase'>Register</h5>
                <br/>
                <form style={{alignSelf:'center'}} onSubmit={handleSubmit}>
                    <div className='form-group '>
                        <input type='text' className='form-control' placeholder='Username' name='name' value={name} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Email Address' name='email' value={email} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' placeholder='Password' name='password' value={password} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' placeholder='Confirm Password' name='passwordConfirm' value={passwordConfirm} onChange={handleChange}/>
                    </div>
                    <br/>
                    <button className='btn btn-bold btn-block btn-primary' type='submit'> Register </button>
                </form>
                <hr className='w-30'/>
            </div>
        </div>
    )
}

export default FormValidation
