import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const {register: login, handleSubmit: handleLoginSubmit, formState: {errors: e = {}}} = useForm();
  const onloginSubmit = data => console.log(data);

  function handleSignInClick() {
    setShowLoginForm(!showLoginForm);
  }

  function showRegForm() {
    setShowLoginForm(false);
  }

  const onSubmit = data => console.log(data);

  const validateGender = (value) => {
    return value !== '' && value !== 'default';
  };

  return (
    <section>
      <div className='register'>
        <div className='col-1'>
          {showLoginForm ? (
            <>
              <h2>Login</h2>
              <form id='loginform' onSubmit={handleLoginSubmit(onloginSubmit)}>
                <input type='email' placeholder='your email' {...login('email', { required: true })} />
                <p className='error'>{e.email?.type === 'required' && 'Email is required'}</p>
                <input type='password' placeholder='password' {...login('password', { required: true })} />
                <p className='error'>{e.password?.type === 'required' && 'Password is required'}</p>
                <button className='regBtn'>Sign In</button>
              </form>
             <button className='regBtn' onClick={showRegForm}>Register</button>
            </>
          ) : (
            <>
              <h2>Register</h2>
              <span>Sign up to our timesheet application</span>
              <form id='regform' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register('FirstName', { required: true })} placeholder='FirstName' />
                <p className='error'>{errors.FirstName?.type === 'required' && 'First Name is required'}</p>
                <input type='text' {...register('LastName', { required: true })} placeholder='LastName' />
                <p className='error'>{errors.LastName?.type === 'required' && 'LastName Name is required'}</p>
                <input type='password' {...register('Password', { required: true })} placeholder='Password' />
                <p className='error'>{errors.Password?.type === 'required' && 'Password is required'}</p>
                <input type='password' {...register('ConfirmPassword', { required: true })} placeholder='Confirm Password' />
                <p className='error'>{errors.ConfirmPassword?.type === 'required' && 'Confirm Password is required'}</p>
                <input type='email' {...register('Email', { required: true })} placeholder='Email' />
                <p className='error'>{errors.Email?.type === 'required' && 'Email is required'}</p>
                <select id='genderDrop' {...register('Gender', { required: true, validate: validateGender })}>
                  <option value='default' defaultChecked>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {errors.Gender?.type === 'validate' && <p className='error'>Please Select an option</p>}
                <input type='tel' {...register("MobileNumber", {required: true})}placeholder='Mobile Number'/>
                    <p className='error'>{errors.MobileNumber?.type === 'required' && "Mobile Number is required"}</p>
                    <button className='regBtn'>Sign Up</button>
                    
                </form>
                <button className='regBtn' onClick={handleSignInClick}>Sign In</button>
                </>
          )}
          </div>
          </div>
          </section>
  )
}

export default Registration
