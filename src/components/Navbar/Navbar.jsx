import React from "react";
import { FaFacebook } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <h4>english<span style={{color:"#4dc274"}}>excellence</span> .</h4>
      <ul>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Our lessons</a>
        </li>
        <li>
          <a href="">Teachers</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <div>
        <FaFacebook /> <FaFacebook /> <FaFacebook />
      </div>
    </div>
  );
}

export default Navbar;
