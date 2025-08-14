import React from 'react';
import ProductCard from './ProductCard';

// Updated array with more modern placeholder images
const products = [
  {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Classic Timepiece',
    price: '250.00',
    description: 'A timeless watch that blends classic design with modern reliability.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Urban Runner',
    price: '120.50',
    description: 'Sleek, lightweight sneakers designed for the modern city dweller.',
  },
  {
    image: 'https://images.unsplash.com/photo-1587563871167-1df9c348e9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Minimalist Handbag',
    price: '350.00',
    description: 'Crafted from premium leather with a clean, minimalist aesthetic.',
  },
  {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Studio Headphones',
    price: '199.99',
    description: 'Immerse yourself in high-fidelity audio with these studio headphones.',
  },
  {
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Designer Sunglasses',
    price: '180.00',
    description: 'Protect your eyes in style with these handcrafted designer shades.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Leather Boots',
    price: '450.75',
    description: 'Durable and stylish leather boots, perfect for any adventure.',
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Modern Collection</h1>
        <p>Discover our curated selection of modern goods</p>
      </header>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;