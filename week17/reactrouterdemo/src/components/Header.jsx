import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function Header() {
    return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <img src="website-logo.svg" width="60" height="60" alt=""></img>
      </Link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" class="nav-link px-2 link-secondary">Home</NavLink></li>
        <li><NavLink to="/about" class="nav-link px-2 link-secondary">About</NavLink></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>

    </header>
  </div>
    );
}