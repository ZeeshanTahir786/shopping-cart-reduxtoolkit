import React from "react";
import { useGetAllProductsQuery } from "../../features/productsApi";

const Home = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  return (
    <div className="home-conatiner">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred</p>
      ) : (
        <>
          <h2>New Arrival</h2>
        </>
      )}
    </div>
  );
};

export default Home;
