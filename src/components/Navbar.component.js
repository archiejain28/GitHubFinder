import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-primary">
        <span id="navbar-brand">
          <i class="fab fa-github" aria-hidden="true"></i> GitHub Finder
        </span>
        <div className="container">
          <ul className="nav-list">
            <li className="nav-items">
              <a href="#">Home</a>
            </li>
            <li className="nav-items">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
