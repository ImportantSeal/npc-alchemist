import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = () => {
  const { isLoggedIn, logout } = useAuthContext();
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>HOME</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/dinner/new" exact>ADD DINNER</NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <button onClick={logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
