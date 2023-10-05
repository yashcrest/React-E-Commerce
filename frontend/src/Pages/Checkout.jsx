import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { countries } from "countries-list";
const Checkout = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.cart);

  //while visiting this page while empty
  const EmptyCart = () => {
    return (
      <div className="text-center">
        <img src="src/img/empty_cart.webp" alt="Empty cart" />
        <p className="lead">Please do some shopping first</p>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  };

  //   Show checkout Summary
  const ShowCheckout = () => {
    console.log(countries);
    let totalItems = 0;
    let shipping = 25.0;
    let subTotal = 0;
    //updating items price
    products.map((item) => (subTotal += item.price * item.quantity));
    //updating total number of items
    products.map((item) => (totalItems += item.quantity));
    return (
      <div className="row d-flex mt-5">
        <div className="col-md-8">
          <div className="card text-start">
            <div className="card-header">Billing</div>
            <div className="card-body">
              <form action="">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="name@example.com"
                />
                <label className="form-label">Card Information</label>
                <input
                  type="number"
                  className="form-control mb-4"
                  placeholder="1234 1234 1234 1234"
                />

                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="43 Anzac highway"
                />
                <label className="form-label">Unit Number</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Unit / Apartment No."
                />
                <label className="form-label">Country / Region</label>
                <select className="form-select">
                  <option value="" disabled selected>
                    Select a country
                  </option>
                  {Object.values(countries).map((country) => (
                    <option value={country.name} key={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Checkout</h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between border-0">
                  Products ({totalItems})<span>${subTotal.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between border-0">
                  Shipping <span>${shipping}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between border-0 fw-bold mb-5">
                  Total <span>${(subTotal + shipping).toFixed(2)}</span>
                </li>
              </ul>
              <button className="btn btn-dark">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="text-center container">
      <h1 className="border-bottom border-dark mt-5">Checkout</h1>
      <div>{products.length ? <ShowCheckout /> : <EmptyCart />}</div>
    </div>
  );
};

export default Checkout;
