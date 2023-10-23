import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          React E-Commerce App
        </NavLink>
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <BsCart4 color="white" size={40} />
                <h6>{cart?.length}</h6>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
