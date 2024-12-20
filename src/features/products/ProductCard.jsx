import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product, loading, onAddToCart }) => {
  if (loading) {
    return (
      <div className="col-md-6 col-xl-3 col-sm">
        <Skeleton height={592} />
      </div>
    );
  }
  return (
    <div className="col-sm-6 col-xl-3 col-sm">
      <div className="card product-info text-center">
        <div className="card-img-wrapper p-5 d-flex justify-content-center align-items-center vh-25">
          <img
            src={product.image}
            alt="product"
            className="card-img-top"
            onClick={() => {
              window.location.href = "/product/" + product.id;
            }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card-content">
            <h5 className="card-title">{product.title.substring(0, 12)}</h5>
          </div>
          <p className="card-text">
            {product.description.substring(0, 100)}...
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item lead fw-semibold">
              {product.price}
            </li>
          </ul>
          <div className="card-actions">
            <Link to={`/products/${product.id}`} className="btn btn-dark m-1">
              View Details
            </Link>
            <button
              className="btn btn-dark m-1"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
