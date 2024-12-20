import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/CartSlice";
import Marquee from "react-fast-marquee";
import useProductDetails from "../hooks/useProductDetails";
import {
  ProductDetails,
  LoadingSkeleton,
  SimilarProducts,
} from "../features/productDetails";

const Product = () => {
  const { id } = useParams();
  const { product, similarProducts, loading, similarProductsLoading, error } =
    useProductDetails(id);
  const dispatch = useDispatch();

  //using redux useDispatch hook to send data across to cart
  const addProductHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container">
      {loading ? (
        <LoadingSkeleton type="product" />
      ) : error ? (
        <div className="text-center my-5">{error}</div>
      ) : (
        <>
          <ProductDetails product={product} onAddToCart={addProductHandler} />
          <div className="row my-5 py-5">
            <div className="d-none d-md-block">
              <h2>Recommended Products</h2>
              <Marquee
                pauseOnHover={true}
                pauseOnClick={true}
                speed={70}
                gradient={true}
              >
                {similarProductsLoading ? (
                  <LoadingSkeleton type="similar" />
                ) : (
                  <SimilarProducts
                    products={similarProducts}
                    onAddToCart={addProductHandler}
                  />
                )}
              </Marquee>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;