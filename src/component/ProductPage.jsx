import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container, StyledLink } from "./styled";

export const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

    const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <h1>Product</h1>
      <table>
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
              <th>{user.title}</th>
              <th>{user.price}</th>
              <th>
                <StyledLink to={`/products/${user.id}`}>
                  more details...
                </StyledLink>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
