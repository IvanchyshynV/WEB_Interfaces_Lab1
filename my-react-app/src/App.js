import './App.css';
import Menu from "./components/menu/Menu";
import { useState } from 'react';
import ProductCard from "./components/product-card/ProductCard";

function App() {
  // Creating an array of product objects in the main component
  const [products, setProducts] = useState([
    {id: 1, title: "Apple", description: "Fresh red apple", price: 15, imgUrl: "apple.jpg", selected: false},
    {id: 2, title: "Orange", description: "Juicy orange", price: 20, imgUrl: "orange.jpg", selected: false},
    {id: 3, title: "Banana", description: "Yellow banana", price: 18, imgUrl: "banana.jpg", selected: false},
    {id: 4, title: "Grapes", description: "Purple grapes", price: 25, imgUrl: "grapes.jpg", selected: false},
  ]);

  const [selectedCount, setSelectedCount] = useState(0);

  // Handler for selecting a product
  const selectProduct = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return {...product, selected: !product.selected};
      }
      return product;
    });
    
    setProducts(updatedProducts);
    
    // Count selected products
    const selected = updatedProducts.filter(product => product.selected).length;
    setSelectedCount(selected);
  };

  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>
      <main>
        <section className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3>Selected Products: {selectedCount}</h3>
            </div>
          </div>
          <div className="row">
            {/* Passing the array to child components */}
            {products.map(product => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                <ProductCard 
                  product={product} 
                  onSelect={() => selectProduct(product.id)}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;