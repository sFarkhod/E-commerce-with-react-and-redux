import React from "react";
import './css/navbar.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="navbar-boss">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand shop-name" to="/">
            gCommerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto list-of-navbar">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
           
           <div className="reg-log-card mr-2">
                <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa-solid fa-right-to-bracket"></i> Login</NavLink>
           </div>
           
           <div className="reg-log-card mr-2">
                <NavLink to="/register" className="btn btn-outline-dark">
                    <i className="fa-solid fa-user-plus"></i> Register</NavLink>
           </div>

           <div className="reg-log-card mr-2">
                <NavLink to="/cart" className="btn btn-outline-dark">
                    <i className="fa-solid fa-cart-shopping"></i> Card ({state.length})</NavLink>
           </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
