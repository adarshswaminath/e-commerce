import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
function ProductCard({ image, name, type, description }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="h-48 w-full object-contain" src={image} alt="Product" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-700">{description.slice(0, 50)}...</p>
       <div className="flex justify-end">
       <button className='btn text-white bg-red-500 hover:bg-red-600'>
        <MdOutlineShoppingCart/>Buy Now
        </button>
       </div>
      </div>
    </div>
  );
}

export default ProductCard;