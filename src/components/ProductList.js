import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard ';

function ProductList({ addToCart }) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //get products by useEffect hook
    useEffect(() => {
        setIsLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data)
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="text-center p-10">Loading products...</div>;
      }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </>
    )
}

export default ProductList;