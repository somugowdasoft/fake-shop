import { useState } from 'react';
import './App.css';
import CartModal from './components/CartModal ';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // validate the add to cart items
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  //cart remove function
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="bg-gray-100 ">
      <NavBar cartCount={cart.length} setIsModalOpen={setIsModalOpen} />
      <ProductList addToCart={addToCart} cartItems={cart} />
      {isModalOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} setIsModalOpen={setIsModalOpen} />
      )}
      <Footer />
    </div>


  );
}

export default App;
