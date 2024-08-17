import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  console.log(products.title);


  useEffect(() => {
    fetch("https://proucts-hunt-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 font-bold text-3xl">All Products</h1>

      <div className="w-11/12 mb-8 mx-auto flex flex-col md:flex-row gap-12">
        <form className="flex gap-2">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="input input-bordered w-full max-w-xs "
          />
          <input type="submit" value="search" className="btn btn-accent" />
        </form>

        <div className="">
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="p-2 w-full rounded-lg border-2 border-black-700 text-gray-700 sm:text-sm"
          >
            <option value="">Select Category</option>
            <option value="JM">Electronics</option>
            <option value="SRV">Furniture</option>
            <option value="JH">Footwear</option>
            <option value="BBK">Home Appliances</option>
            <option value="AK">Fitness</option>
            <option value="BG">Clothing</option>
            <option value="EC">Accessories</option>
          </select>
        </div>
      </div>

      {/* Maaping through products */}
      <div className="w-11/12 mx-auto grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
