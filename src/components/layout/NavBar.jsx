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
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <div className="cart-icon-container">
                  <BsCart4 color="white" size={40} />
                  {cart.length > 0 && (
                    <h6 className="cart-icon">{cart.length}</h6>
                  )}
                </div>
              </NavLink>
            </li>
            <SignedIn>
              <div>
                <li className="nav-item">
                  <UserButton />
                </li>
              </div>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
