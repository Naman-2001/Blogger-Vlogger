import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="clearfix header-style5">
      <div className="logo-place">
        <div className="container">
          <div className="inner-logo-place">
            <a className="navbar-brand" href="/">
              Complete Blog Website
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
