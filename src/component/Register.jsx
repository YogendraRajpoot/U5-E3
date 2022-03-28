import React from "react";
import { Container, StyledForm } from "./styled";

export const Register = () => {
  return (
    <Container>
      <h1>Register</h1>
      <StyledForm>
        <label>
          {" "}
          Name :-
          <input
            type="text"
            placeholder="Enter Your Name"
            name="email"
            value={email}
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
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          User-Name :-
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
            type="text"
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
