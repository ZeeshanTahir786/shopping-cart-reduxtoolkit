import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { useGetAllProductsQuery } from "../../features/productsApi";
import "../Home/Home.css";

const Home = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate(`/cart`);
  };
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
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
