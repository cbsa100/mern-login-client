import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Home = ({ user, logout }) => {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    !user.token && navigate('/login');
  }, [user, location]);

  return (
    <div className='home-container'>
      {user.token ? (
        <>
          <h2>Home</h2>
          <div>{user.msg.name}</div>
          <div>{user.msg.email}</div>
          <div className='logout-button' onClick={logout}>
            logout
          </div>
        </>
      ) : (
        <div>you are not logged in</div>
      )}
    </div>
  );
};

export default Home;
