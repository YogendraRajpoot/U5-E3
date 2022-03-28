import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container, Logout, StyledLink, StyleTable } from "./styled";

export const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

    const { isAuth,logout } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <h1>Product</h1>
      <Logout onClick={logout}>Logout</Logout>
      <StyleTable>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>More Details...</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.price}</td>
              <td>
                <StyledLink to={`/products/${user.id}`}>
                  more details...
                </StyledLink>
              </td>
            </tr>
          ))}
        </tbody>
      </StyleTable>
    </Container>
  );
};
