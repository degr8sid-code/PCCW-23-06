import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function Header() {
    return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <img src="website-logo.svg" width="60" height="60" alt=""></img>
      </Link>

      <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" 
              className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-secondary">About</NavLink></li>
        <li><NavLink to="/book" className="nav-link px-2 link-secondary">Book</NavLink></li>
        <li><NavLink to="/favourites" className="nav-link px-2 link-secondary">Favourites</NavLink></li>
      </ul>

      <div className="col-md-3 col-md-auto mb-2 justify-content-end mb-md-0">
        <Link to="/cart" className="col-md-3">
        <img src="cart.svg" width="30" height="30" alt="Cart"></img>
        </Link>
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>

    </header>
  </div>
    );
}