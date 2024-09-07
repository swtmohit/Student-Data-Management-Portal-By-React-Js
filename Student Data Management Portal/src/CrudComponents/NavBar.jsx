import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand" >
            React Users
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/Home"} className="nav-link " aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/About"} className="nav-link" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/Contact"} className="nav-link " >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/Admin"} className="nav-link " >
                  Admin
                </NavLink>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
