import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/auth-context"; 
import "./Navbar.css"; 

const Navbar = () => {
  const { isLoggedIn, userId, userName, logout } = useAuthContext();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">My Dinner</Link>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/items/new">Add Item</Link>
              </li>
              <li>
                <Link to="/users">All Users</Link>
              </li>

              <li>
                <button className="navbar__logout" onClick={logout}>
                  Logout
                </button>
              </li>
              <li className="navbar__user">
                <span>Welcome, {userName ? userName : userId}</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
