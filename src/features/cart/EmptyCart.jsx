import BackToShopButton from "./BackToShopButton";

const EmptyCart = ({ onContinueShopping }) => (
  <div className="text-center">
    <img src="img/empty_cart.webp" alt="Empty cart" />
    <p className="lead">Your cart is empty</p>
    <BackToShopButton onClick={onContinueShopping} />
  </div>
);

export default EmptyCart;
