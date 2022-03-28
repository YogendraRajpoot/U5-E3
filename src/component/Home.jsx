import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ProductPage } from "./ProductPage";
import { Container, Logout } from "./styled";

export const Home = () => {
  const { isAuth,logout } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <div>
        <h1>Home</h1>
        <Logout onClick={logout}>Logout</Logout>
      </div>
      <ProductPage />
    </Container>
  );
};
