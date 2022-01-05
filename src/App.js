import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const login = async (details, navigate) => {
    try {
      const response = await axios.request({
        method: 'post',
        url: 'http://localhost:8080/api/auth/signin-user',
        data: JSON.stringify(details),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch {
      setError('Details dont match');
    }
  };
  const logout = () => {
    setUser({});
    localStorage.clear();
  };

  const register = async (details, navigate) => {
    try {
      const response = await axios.request({
        method: 'post',
        url: 'http://localhost:8080/api/auth/register',
        data: JSON.stringify(details),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/login');
    } catch {}
  };

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home user={user} logout={logout} />} />
            <Route
              path='login'
              element={
                <Login
                  user={user}
                  logout={logout}
                  login={login}
                  error={error}
                />
              }
            />
            <Route path='register' element={<Register register={register} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
