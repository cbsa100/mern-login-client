import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ login, error, user, logout }) => {
  const [details, setDetails] = useState({ email: '', password: '' });

  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    login(details, navigate);
  };
  return (
    <div>
      {user.token ? (
        <span>
          you are already logged in
          <div className='logout-button' onClick={logout}>
            logout
          </div>
        </span>
      ) : (
        <>
          <form onSubmit={submitHandler}>
            <div className='form-inner'>
              <h2>login</h2>
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
                  autoComplete='current-password'
                />
              </div>
              <input type='submit' value='Log In' />
            </div>
            {error !== '' ? <div className='error'>{error}</div> : null}
          </form>
          <div className='link'>
            not a user yet? <Link to='/register'>sign up!</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
