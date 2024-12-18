import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/CartSlice";
import { setCategory } from "../redux/action/ProductFilterSlice";

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //bringing in productFilter State
  const { category } = useSelector((state) => state.productFilter);

  // different category
  const categories = [
    {
      value: "All",
      name: "All",
    },
    {
      value: "men's clothing",
      name: "Men's Clothing",
    },
    {
      value: "women's clothing",
      name: "Women's Clothing",
    },
    {
      value: "electronics",
      name: "Electronics",
    },
    {
      value: "jewelery",
      name: "Jewelery",
    },
  ];

  //axios instance for getting the clothing data
  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products/",
  });

  //getting products  data when page loads
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      let response = await client.get();
      if (componentMounted) {
        setProducts(response.data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  //add item to cart handler
  const addProductHandler = (product) => {
    dispatch(addToCart(product));
  };

  //show products
  const ShowProducts = () => {
    let filteredProducts = products;

    if (category !== "All") {
      filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }
    return (
      <>
        {filteredProducts.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-6 col-xl-3 col-sm"
            >
              <div key={product.id} className="card product-info text-center">
                <div className="card-img-wrapper p-5 d-flex justify-content-center align-items-center vh-25">
                  <img
                    src={product.image}
                    alt="product image"
                    className="card-img-top"
                    onClick={() => {
                      navigate("product/" + product.id);
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="card-content">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}
                    </h5>
                  </div>
                  <p className="card-text">
                    {product.description.substring(0, 100)}...
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead fw-semibold">
                      $ {product.price}
                    </li>
                  </ul>
                  <div className="card-actions">
                    <Link
                      to={"/product/" + product.id}
                      className="btn btn-dark m-1"
                    >
                      View Details
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => {
                        addProductHandler(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  //Loading skeleton
  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <select
          className="p-2 text-center fw-bold mb-4 select-box"
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map((category) => (
            <option value={category.value} key={category.value}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="row g-5 mb-5 d-flex justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
};

export default ProductInfo;
