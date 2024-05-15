import React from "react";
import logo1 from "../../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="nav-logo" src={logo1} alt="logo1" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">About</li>
        <li href="#">Catagory</li>
        <li href="#">Contact</li>
      </ul>
      <button className="nav-btn">Log In</button>
    </nav>
  );
};

export default Navbar;
