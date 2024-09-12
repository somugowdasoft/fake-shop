import React from 'react';

const ProductCard = ({ product, addToCart, cartItems }) => {

  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 w-40 object-contain" />
      <h2 className="text-lg font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`${isInCart ? "bg-gradient-isInCart" : "bg-custom-gradient"} text-white px-4 py-2 mt-2 rounded`}
      >
        {isInCart ? "InCart" : "Add to Cart"}
      </button>
    </div>
  )
}




export default ProductCard;
