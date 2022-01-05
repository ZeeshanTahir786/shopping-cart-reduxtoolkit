import React from "react";
import { useGetAllProductsQuery } from "../../features/productsApi";

const Home = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  return <div>{isLoading ? <p>Loading...</p> : "Succ"}</div>;
};

export default Home;
