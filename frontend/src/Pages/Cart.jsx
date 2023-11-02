import React from "react";
import axios from "axios";
import {
  FaCartShopping,
  FaPlus,
  FaMinus,
  FaArrowLeftLong,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
//importing all the reducers method on CartSlice.js file
import {
  removeFromCart,
  decrementProduct,
  increamentProduct,
} from "../redux/action/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate(); //hook to navigate the different pages
  const dispatch = useDispatch(); // redux hook to send data to redux state
  const products = useSelector((state) => state.cart.cart); // this will run whenever a action is dispatched

  //product id's mapping with Stripe id
  const stripeProductMapping = {
    1: "price_1NxJQmIIas9tFQMRj8ZjcIGL",
    2: "price_1NxJReIIas9tFQMRPt24m3g4",
    3: "price_1NxJS7IIas9tFQMR7H46sD79",
    4: "price_1NxJSVIIas9tFQMRUKKGB3LL",
    5: "price_1NxJT2IIas9tFQMRWy1aKb6v",
    6: "price_1NxJTRIIas9tFQMRr9k9Y4jF",
    7: "price_1NxJU1IIas9tFQMR9qz5jQYC",
    8: "price_1NxJUQIIas9tFQMR1JnGXNjX",
    9: "price_1NxJUzIIas9tFQMRrHubYQCE",
    10: "price_1NxJVnIIas9tFQMRgIthTrEa",
    11: "price_1NxJWoIIas9tFQMRISZB32DO",
    12: "price_1NxJXMIIas9tFQMRwpYzRAbi",
    13: "price_1NxJXiIIas9tFQMRYQUIJS2i",
    14: "price_1NxJYKIIas9tFQMRAcdQjJUC",
    15: "price_1NxJZRIIas9tFQMR8FqCTkRn",
    16: "price_1NxJa1IIas9tFQMR9fERzysb",
    17: "price_1NxJadIIas9tFQMRkwBc3Oid",
    18: "price_1NxJe9IIas9tFQMRnbaBY0wx",
    19: "price_1NxJeaIIas9tFQMRcRTCP49g",
    20: "price_1NxJeuIIas9tFQMROCyviUiG",
  };

  //axios backend call
  const backendClient = axios.create({
    baseURL: "http://localhost:4000" || process.env.REACT_APP_BACKEND_URL,
  });

  //calling backend
  const checkout = async () => {
    try {
      //map the products to use the stripe products IDs
      const productsForCheckout = products.map((product) => ({
        id: stripeProductMapping[product.id],
        quantity: product.quantity,
      }));
      const response = await backendClient.post("/checkout", {
        products: productsForCheckout,
      });
      if (response.data.url) {
        window.location.assign(response.data.url);
      }
    } catch (err) {
      console.log("Erorr during checkout: ", err);
    }
  };

  //remove product handler
  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  //increase items value handler
  const increaseProductHandler = (product) => {
    dispatch(increamentProduct(product));
  };

  //decrease items value handler
  const decreaseProductHandler = (product) => {
    dispatch(decrementProduct(product));
  };

  const EmptyCart = () => {
    return (
      <div className="text-center">
        <img src="img/empty_cart.webp" alt="Empty cart" />
        <p className="lead">Your cart is empty</p>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  };

  const ShowCart = () => {
    let totalItems = 0;
    let shipping = 25.0;
    let subTotal = 0;
    //updating items price
    products.map((item) => (subTotal += item.price * item.quantity));
    //updating total number of items
    products.map((item) => (totalItems += item.quantity));
    return (
      <>
        <div>
          <FaArrowLeftLong
            size={30}
            className="mb-3"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="row d-flex  vh-100">
          {/* all items in cart section */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                {products.map((product) => (
                  <div key={product.id}>
                    <div className="row d-flex align-items-center my-3 border-bottom border-dark">
                      <div className="col-md-3 mb-3">
                        <img
                          src={product.image}
                          className="img-fluid"
                          width={120}
                          height={120}
                          alt={product.title}
                        />
                      </div>
                      <div className="col-md-3 text-left">
                        <h4>{product.title.substring(0, 30)}</h4>
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => decreaseProductHandler(product)}
                          >
                            <FaMinus size={10} />
                          </button>
                          <p className="h4">{product.quantity}</p>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => increaseProductHandler(product)}
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                        <h4>
                          ${(product.price * product.quantity).toFixed(2)}
                        </h4>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => removeProductHandler(product)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* checkout box */}
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
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    checkout();
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <h1 className="text-center my-5 border-bottom border-dark py-3 container">
        Cart
        <FaCartShopping className="mx-2" size={40} />
      </h1>
      <div className="container">
        {products.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
