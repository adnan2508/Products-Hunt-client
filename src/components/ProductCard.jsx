import React from "react";

const ProductCard = ({ product }) => {

  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img alt="" src={product.image} className="h-56 w-full object-cover" />

        <div className="bg-white p-4 sm:p-6">
          <p className="block text-xs text-gray-500">
            {product.category}
          </p>

          <div>
            <h3 className="mt-0.5 text-lg text-gray-900">{product.title}</h3>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {product.description}
          </p>
          <p className="mt-1">Price: ${product.price}</p>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
