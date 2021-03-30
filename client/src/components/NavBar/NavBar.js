import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../js/Action/actionUser";

import "./NavBar.css";

const NavBar = () => {
  
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const dispatch = useDispatch()

  return (
    <div className="header-blue">
      <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div className="container">
          <Link to="/" className="navbar-brand" >
          Shopping Sport Equipment
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <Link to="/"  className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <span
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </span>
                <div className="dropdown-menu" role="menu">
                  <Link to="#"  className="dropdown-item" role="presentation" >
                    First Item
                  </Link>
                  <Link to="#"  className="dropdown-item" role="presentation">
                    Second Item
                  </Link>
                  <Link to="#"  className="dropdown-item" role="presentation">
                    Third Item
                  </Link>
                </div>
              </li>
            </ul>
            <form className="form-inline mr-auto" target="_self">
              <div className="form-group">
                <label >
                  <i className="fa fa-search"></i>
                </label>
                <input
                  className="form-control search-field"
                  type="search"
                  name="search"
                  id="search-field"
                />
              </div>
            </form>
            {
              isAuth ?  
            <div className="dropdown">
               <span
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </span>
                <div className="dropdown-menu" role="menu">
                  <Link to="/profile" className="dropdown-item">
                    My Account
                  </Link>
                  <Link to="/" className="dropdown-item" onClick={()=>{dispatch(logout())}}>
                    Logout
                  </Link>
                </div>
            </div>
            :
            <>
            <span className="navbar-text">
            <Link to="/signin"  className="login">
              Log In
            </Link>
          </span>
          <Link to="/signup"  className="btn btn-light action-button" role="button">
            Sign Up
          </Link>
          </>
            }
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
