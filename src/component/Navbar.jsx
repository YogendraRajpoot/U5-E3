import React from "react";
import { Section1, StyledLink } from "./styled";

export const Navbar = () => {
  return (
    <Section1>
      <div>Topic</div>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </div>
    </Section1>
  );
};
