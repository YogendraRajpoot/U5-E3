import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ProductPage } from "./ProductPage";
import { Container } from "./styled";

export const Home = () => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <h1>Home</h1>
      <ProductPage/>
    </Container>
  );
};
