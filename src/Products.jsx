import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
  }, [])
  return (
    <div>
      <h1 className='text-center my-5 font-bold text-3xl'>All Products</h1>

      <div className='grid-cols-3'>
        {
          products.map(product => <ProductCard key={product._id}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default Products;