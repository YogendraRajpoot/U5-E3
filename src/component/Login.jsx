import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container, StyledForm } from "./styled";

export const Login = () => {
  const navigate=useNavigate()
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/productpage")
    console.log(form);
    fetch(`http://localhost:3001/login`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => login("123"))
      .catch((err) => console.log(err));
  };
  

  const { email, password } = form;

  return (
    <Container>
      <h1>Login</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Email :-
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Password :-
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Login" />
      </StyledForm>
    </Container>
  );
};
