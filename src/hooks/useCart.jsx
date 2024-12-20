import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementProduct,
  incrementProduct,
} from "../redux/action/CartSlice";
import stripeProductMapping from "../utils/stripeProductMapping";

const useCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);

  //function to map products to strip product IDs
  const mapToStripeProducts = () => {
    products.map((product) => ({
      id: stripeProductMapping[product.id],
      quantity: product.quantity,
    }));
  };

  // function to handle cart actions
  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const increaseProduct = (product) => {
    dispatch(incrementProduct(product));
  };

  const decreaseProduct = (product) => {
    dispatch(decrementProduct(product));
  };

  //   Calculate cart total
  const calculateTotals = () => {
    let subTotal = 0;
    let totalItems = 0;
    products.forEach((product) => {
      subTotal += product.price * product.quantity;
      totalItems += product.quantity;
    });
    const shipping = subTotal > 0 ? 25.0 : 0;
    const total = subTotal + shipping;

    return { subTotal, totalItems, shipping, total };
  };

  return {
    products,
    removeProduct,
    increaseProduct,
    decreaseProduct,
    calculateTotals,
    mapToStripeProducts,
  };
};

export default useCart;
