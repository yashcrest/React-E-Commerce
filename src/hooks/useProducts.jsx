import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        if (isMounted) setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    return () => (isMounted = false);
  }, []);
  return { products, loading };
};

export default useProducts;
