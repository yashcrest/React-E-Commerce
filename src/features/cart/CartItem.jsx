import { FaPlus, FaMinus } from "react-icons/fa6";

const CartItem = ({ product, onRemove, onIncrement, onDecrement }) => (
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
          onClick={() => onDecrement(product)}
        >
          <FaMinus size={10} />
        </button>
        <p className="h4">{product.quantity}</p>
        <button
          className="btn btn-outline-dark"
          onClick={() => onIncrement(product)}
        >
          <FaPlus size={10} />
        </button>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <h4>${(product.price * product.quantity).toFixed(2)}</h4>
      <button
        className="btn btn-outline-danger"
        onClick={() => onRemove(product)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default CartItem;
