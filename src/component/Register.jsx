import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledForm } from "./styled";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    aboutyou: "",
    username: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { name, email, password, username, mobilenumber, aboutyou } = form;

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch(`https://masai-api-mocker.herokuapp.com//auth/register`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    login();
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <Container>
      <h1>Register</h1>
      <StyledForm onSubmit={hadleSubmit}>
        <label>
          {" "}
          Name :-
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
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
        <label>
          UserName :-
          <input
            type="text"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Mobile-Number :-
          <input
            type="number"
            placeholder="Enter Your Mobile-Number"
            name="mobilenumber"
            value={mobilenumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          About You :-
          <input
            type="text"
            placeholder="Write Something About You "
            name="aboutyou"
            value={aboutyou}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </StyledForm>
    </Container>
  );
};
