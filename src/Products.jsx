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

      <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-5'>
      <input type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs mb-5"/>
      <div>

  <div className=''>
  <select
    name="HeadlineAct"
    id="HeadlineAct"
    className="mt-1.5 w-full rounded-lg border-2 border-black-700 text-gray-700 sm:text-sm">
    <option value="">Sort By</option>
    <option value="JM">John Mayer</option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </select>
  </div>
</div>
      </div>

      <div className='w-11/12 mx-auto grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default Products;