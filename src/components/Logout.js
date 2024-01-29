import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };
  return (
    <div className="loginPage">
      <p>Logout</p>
      <button className="loginButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
