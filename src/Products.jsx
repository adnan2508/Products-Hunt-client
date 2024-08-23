import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

 

  useEffect(()=> {
    fetch(`https://proucts-hunt-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case "Price(Low to High)":
        return products.sort((a, b) => a.price - b.price);
      case "Price(High to Low)":
        return products.sort((a, b) => b.price - a.price);
      case "Alphabetically(A-Z)":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "Alphabetically(Z-A)":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

   // Filtering products based on the search query
   const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div>
      <h1 className="text-center my-5 font-bold text-3xl">All Products</h1>

      <div className="w-11/12 mb-8 mx-auto flex flex-col md:flex-row gap-12">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="input input-bordered w-full max-w-xs "
          />
          <input type="submit" value="Search" className="btn btn-accent" />
        </form>

        <div>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="select select-secondary max-w-xs"
        >
          <option value="" disabled selected>
            Sort By
          </option>
          <option value="Price(Low to High)">Price(Low to High)</option>
          <option value="Price(High to Low)">Price(High to Low)</option>
          <option value="Alphabetically(A-Z)">Alphabetically(A-Z)</option>
          <option value="Alphabetically(Z-A)">Alphabetically(Z-A)</option>
        </select>
        </div>

      </div>

      {/* Mapping through products */}
      <div className="w-11/12 mx-auto grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
