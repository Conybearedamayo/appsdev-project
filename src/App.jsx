import React from 'react';
import ProductCard from './ProductCard';
import {products} from './data'; 

function App() {
const output = products.map((product) => (
  <ProductCard
    key={product.id}
    props={product}
  />
));

  return (
    <div className="app">
      <header className="app-header">
        <h1>UNDERGROUND APPARELL Collection</h1>
        <p>Discover our curated selection of UA Product and Collection</p>
      </header>
      <div className="product-list">
        {output}
      </div>
    </div>
  );
}

export default App;