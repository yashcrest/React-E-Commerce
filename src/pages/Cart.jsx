import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { CartItem, EmptyCart, CartSummary } from "../features/cart";
import { FaCartShopping, FaArrowLeftLong } from "react-icons/fa6";

const Cart = () => {
  const navigate = useNavigate();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const {
    products,
    removeProduct,
    increaseProduct,
    decreaseProduct,
    calculateTotals,
    mapToStripeProducts,
  } = useCart();

  const { subTotal, totalItems, shipping, total } = calculateTotals();

  //calling backend using fetch
  const checkout = async () => {
    try {
      setIsCheckoutLoading(true);
      const productsForCheckout = mapToStripeProducts();
      const response = await axios.post(
        import.meta.env.VITE_ECOMMERCE_BACKEND_URL,
        {
          products: productsForCheckout,
        }
      );

      const { data } = response;
      if (data.url) {
        window.location.assign(data.url);
      }
    } catch (err) {
      console.log("Erorr during checkout: ", err);
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5 border-bottom border-dark py-3 pt-5 ">
        Cart
        <FaCartShopping className="mx-2" size={40} />
      </h1>
      <div className="mb-4">
        <FaArrowLeftLong
          size={30}
          className="mb-4"
          onClick={() => navigate("/")}
        />
      </div>
      {products.length > 0 ? (
        <div className="row">
          <div className="col-md-8">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onRemove={removeProduct}
                onIncrement={increaseProduct}
                onDecrement={decreaseProduct}
              />
            ))}
          </div>
          <div className="col md-4">
            <CartSummary
              subTotal={subTotal}
              total={total}
              totalItems={totalItems}
              shipping={shipping}
              onCheckout={checkout}
              isCheckoutLoading={isCheckoutLoading}
            />
          </div>
        </div>
      ) : (
        <EmptyCart onContinueShopping={() => navigate("/")} />
      )}
    </div>
  );
};

export default Cart;
