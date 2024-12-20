import { Spinner } from "react-bootstrap";
const CartSummary = ({
  subTotal,
  totalItems,
  shipping,
  total,
  onCheckout,
  isCheckoutLoading,
}) => (
  <div className="card">
    <div className="card-header">
      <h3>Checkout</h3>
    </div>
    <div className="card-body">
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between border-0">
          Products ({totalItems}) <span>${subTotal.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between border-0">
          Shipping <span>${shipping}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between border-0 fw-bold mb-5">
          Total <span>${total.toFixed(2)}</span>
        </li>
      </ul>
      <button
        className="btn btn-dark"
        onClick={onCheckout}
        disabled={isCheckoutLoading}
      >
        {isCheckoutLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
        ) : (
          "Checkout"
        )}
      </button>
    </div>
  </div>
);

export default CartSummary;
