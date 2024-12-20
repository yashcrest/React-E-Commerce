import axios from "axios";
import { useState, useEffect } from "react";

const useProductDetails = (productId) => {
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [similarProductsLoading, setSimilarProductsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const productResponse = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(productResponse.data);
        setLoading(false);

        setSimilarProductsLoading(true);
        const similarProducts = await axios.get(
          `https://fakestoreapi.com/products/category/${productResponse.data.category}`
        );
        setSimilarProducts(similarProducts.data);
        setSimilarProductsLoading(false);
      } catch (error) {
        setError("Failed to load product details. Please try again");
        setSimilarProductsLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return { product, similarProducts, loading, similarProductsLoading, error };
};

export default useProductDetails;
