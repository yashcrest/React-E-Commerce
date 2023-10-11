import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/CartSlice";
import Marquee from "react-fast-marquee";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [similarProductsLoading, setSimilarProductsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //using redux useDispatch hook to send data across to cart
  const addProductHandler = (item) => {
    dispatch(addToCart(item));
  };

  //creating base axios instance
  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products/",
  });

  //calling the API again using the id passed on from home page
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setSimilarProductsLoading(true);
      const response = await client.get(`${id}`);
      setProduct(response.data);
      setLoading(false);
      const response2 = await client.get(`category/${response.data.category}`);
      setSimilarProducts(response2.data);
      setSimilarProductsLoading(false);
    };
    getProduct();
  }, [id]);

  //showing products details information
  const ShowProduct = () => {
    return (
      <>
        <div className="container px-sm-4">
          <div className="row">
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
              <h4 className="text-mutted my-2">
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
                onClick={() => addProductHandler(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  //showing similar products based on category
  const ShowSimilarProducts = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div
                  className="card similar-product-info mx-4 text-center"
                  key={item.id}
                >
                  <img
                    className=" p-5 similar-product"
                    src={item.image}
                    alt={item.title}
                    onClick={() => {
                      navigate("/product/" + item.id);
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 20)}...
                    </h5>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-outline-dark mx-2"
                        onClick={() => navigate("/product/" + item.id)}
                      >
                        Buy now
                      </button>
                      <button
                        className="btn btn-outline-dark mx-1"
                        onClick={() => addProductHandler(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  //this is the loading effect you will see before the product info loads
  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-5 py-5">
              <Skeleton height={90} width={250} />
              <Skeleton height={30} width={100} />
              <Skeleton height={90} />
            </div>
          </div>
        </div>
      </>
    );
  };

  //this is the loading effect on the similar Products section
  const LoadingSimilarProducts = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row"> {loading ? <Loading /> : <ShowProduct />}</div>
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
                <LoadingSimilarProducts />
              ) : (
                <ShowSimilarProducts />
              )}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
