import React from 'react';

const CartModal = ({ cart, removeFromCart, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center overflow-auto items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <img src={item.image} alt={item.title} className='w-1/5 h-auto p-2' />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-custom-gradient text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-custom-gradient mt-4 w-full text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
