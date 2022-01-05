import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = ({ register }) => {
  const [details, setDetails] = useState({ name: '', email: '', password: '' });

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    register(details, navigate);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='form-inner'>
          <h2>Register</h2>
          <div className='form-group'>
            <label htmlFor='name'>name</label>
            <input
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
              type='text'
              name='name'
              id='name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>email</label>
            <input
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              type='password'
              name='password'
              id='password'
              autoComplete='new-password'
            />
          </div>
          <input type='submit' value='Log In' />
        </div>
      </form>
      <Link to='/login'>Log In</Link>
    </div>
  );
};

export default Register;
