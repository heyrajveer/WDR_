import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AxiosUse() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  async function getUsers() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProduct(response.data.products);
    } catch (error) {
      console.log("error->", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  // 🔥 Filter by input
  const filteredProducts = product.filter((p) =>
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Product List</h1>

      {/* 🔥 Input Filter */}
      <div className="text-center mb-3">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search by category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProducts.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="card h-100 shadow">
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{item.title}</h5>
                <p>Category: {item.category}</p>
                <p>₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AxiosUse;