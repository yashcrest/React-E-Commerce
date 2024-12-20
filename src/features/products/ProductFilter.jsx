const ProductFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="d-flex justify-content-end">
      <select
        className="p-2 text-center fw-bold mb-4 select-box"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option value={category.value} key={category.value}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
