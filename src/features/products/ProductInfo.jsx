import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action/CartSlice";
import { setCategory } from "../../redux/action/ProductFilterSlice";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
import { toast } from "react-toastify";
import { useUser } from "@clerk/clerk-react";

const ProductInfo = () => {
  const { products, loading } = useProducts();
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.productFilter);

  const { isSignedIn } = useUser();

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

  const filteredProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }, [products, category]);

  //add item to cart handler
  const handleAddToCart = (product) => {
    if (!isSignedIn) {
      toast.error("Please sign in to add items to cart");
      return;
    }
    dispatch(addToCart(product));
  };

  const handleCategoryChange = (selectedCategory) => {
    dispatch(setCategory(selectedCategory));
  };

  return (
    <>
      <ProductFilter
        categories={categories}
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />
      <div className="row g-5 mb-5 d-flex justify-content-center">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCard key={`skeleton-${index}`} loading={true} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
      </div>
    </>
  );
};

export default ProductInfo;
