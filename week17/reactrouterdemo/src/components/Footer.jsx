import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Footer () {
    return(
        <div className="container">
   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
     <img src="website-logo.svg" width="60" height="60" alt=""></img>
    </Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/about" className="nav-link px-2 text-muted">Features</NavLink></li>
      
    </ul>
  </footer>
</div>
    )

}