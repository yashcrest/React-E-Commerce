import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const ProductDetails = ({ product, onAddToCart }) => (
  <div className="row mt-5 pt-5">
    <div className="col-md-6 col-sm-12 py-5">
      <img
        className="img-fluid"
        src={product.image}
        alt={product.title}
        width="400px"
        height="400px"
      />
    </div>
    <div className="col-md-6 py-5">
      <h4 className="text-uppercase">{product.category}</h4>
      <h1 className="display-6">{product.title}</h1>
      <h4 className="text-muted my-2">
        <BsCurrencyBitcoin size={30} style={{ color: "#f2a900" }} />
        {product.price}
      </h4>
      <p className="lead">
        {product.rating && product.rating.rate}

        <FaStar className="mx-2" />
      </p>
      <p className="lead">{product.description}</p>
      <button
        className="btn btn-dark text-light"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductDetails;
