import React from "react";
import { Container } from "./styled";

export const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <form >
        <input type="text" placeholder="Enter Your Name"/>
        <input type="text" placeholder="Enter Your Email"/>
        <input type="text" placeholder="Enter Your Password"/>
        <input type="text" placeholder="Enter Your Username"/>
        <input type="text" placeholder="Enter Your Mobile-Number"/>
        <input type="text" placeholder="Write Something About You "/>
      </form>
    </Container>
  );
};
