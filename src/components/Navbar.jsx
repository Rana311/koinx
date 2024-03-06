import React from 'react';
import '../App.css'; // Adjust the path to match the location of your App.css file
import logo from '../images/KoinX_logo.png'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container"> {/* Changed from container-fluid to container */}
          <a href="#">
          <img src={logo} alt="KoinX Logo" />

          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Crypto Taxes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Free Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resource Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
