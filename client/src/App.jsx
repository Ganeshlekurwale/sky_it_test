import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setProducts(res.data); 
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <Products />
      </div>
      <div>
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
