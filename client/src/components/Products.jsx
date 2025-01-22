import React, { useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const parseFile = () => {
    const file = document.querySelector("input").files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const parsedData = JSON.parse(reader.result); 
      setProducts(parsedData); 
    };
  };

  const fileUpload = async () => {
    try {
      const res = await axios.post("http://localhost:8000/products", products, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Uploaded Products:", res.data);
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  return (
    <div>
      <h3>Upload File</h3>
      <input type="file" placeholder="Upload products" onChange={parseFile} />
      <button onClick={fileUpload}>Upload</button>
    </div>
  );
};

export default Products;
