import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }, [])
  return (
    <div>
      <h1>All products</h1>
    </div>
  );
};

export default Products;