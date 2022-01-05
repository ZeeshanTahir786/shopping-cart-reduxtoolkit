import React from "react";
import { useGetAllProductsQuery } from "../../features/productsApi";
import "../Home/Home.css";

const Home = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <>
          <h2>New Arrival</h2>
          <div className="products">
            {data.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span>${product.price}</span>
                </div>
                <button>Add to cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
