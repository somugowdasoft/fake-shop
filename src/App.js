import { useEffect, useState } from 'react';
import './App.css';
import CartModal from './components/CartModal ';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard ';
import axios from 'axios';
import Footer from './components/Footer';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // const openModal = () => { setIsModalOpen(true) };
  // const closeModal = () => { setIsModalOpen(false) };

  console.log(isModalOpen);


  return (
    <div className="bg-gray-100 ">
      <NavBar cartCount={cart.length} setIsModalOpen={setIsModalOpen} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {isModalOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} setIsModalOpen={setIsModalOpen} />
      )}
      <Footer />
    </div>


  );
}

export default App;
