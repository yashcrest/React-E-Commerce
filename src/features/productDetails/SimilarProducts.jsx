import { useNavigate } from "react-router-dom";

const SimilarProducts = ({ products, onAddToCart }) => {
  const navigate = useNavigate();
  return (
    <div className="py-4 my-4">
      <div className="d-flex">
        {products.map((item) => (
          <div
            className="card similar-product-info m-4 text-center"
            key={item.id}
          >
            <img
              className="p-5 similar-product"
              src={item.image}
              alt={item.title}
              onClick={() => navigate("/product/" + item.id)}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title.substring(0, 20)}...</h5>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-outline-dark mx-2"
                  onClick={() => navigate("/product/" + item.id)}
                >
                  Buy Now
                </button>
                <button
                  className="btn btn-outline-dark mx-1"
                  onClick={() => onAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
