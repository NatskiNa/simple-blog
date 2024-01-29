import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHouse, FaFilePen, FaArrowRight } from 'react-icons/fa6';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FaHouse className="icon" />
        Home
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FaArrowRight className="icon" />
          Login
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FaFilePen className="icon" />
            Post
          </Link>
          <Link to="/logout">
            <FaArrowRight className="icon" />
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
