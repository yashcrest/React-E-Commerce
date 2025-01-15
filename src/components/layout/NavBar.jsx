import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Op Shop
        </NavLink>

        <ul className="navbar-nav ms-auto">
          <div className="d-flex">
            <li className="nav-item mx-2">
              <NavLink to="/cart" className="nav-link">
                <div className="cart-icon-container">
                  <BsCart4 color="white" size={35} />
                  {cart.length > 0 && (
                    <p className="cart-icon">{cart.length}</p>
                  )}
                </div>
              </NavLink>
            </li>
            <div className="d-flex align-items-center">
              <SignedIn>
                <li className="nav-item d-flex align-items-center">
                  <UserButton />
                </li>
              </SignedIn>
              <SignedOut>
                <NavLink to="/login" className="nav-link">
                  <div>
                    <li className="nav-item">
                      <span>Sign In</span>
                    </li>
                  </div>
                </NavLink>
                <NavLink to="/register" className="nav-link">
                  <div>
                    <li className="nav-item">
                      <span>Register</span>
                    </li>
                  </div>
                </NavLink>
              </SignedOut>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
