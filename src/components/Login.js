import { signInWithRedirect } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

//refer to Googl Firebase document
const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithRedirect(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };
  return (
    <div className="loginPage">
      <p>Login and get started</p>
      <button className="loginButton" onClick={loginInWithGoogle}>
        login with Google
      </button>
    </div>
  );
};

export default Login;
