import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
`;

const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(242, 112, 156),
    rgb(255, 148, 114)
  );
  color: white;
  padding: 20px;
  height: 920px;
  width: 100%;
`;
const Section1 = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  height: 20px;
  width: 98%;
`;
const StyledLink = styled(Link)`
  margin-left: 15px;
  margin-top: -1%;
  text-decoration: none;
  color: red;
  font-size: larger;
  font-weight: 600;
  float: right;
`;
const StyledForm = styled.form`
  border: 1px solid black;
  border-radius: 2%;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px 8px 10px #888888;
`;

const Logout = styled.button`
  border: none;
  background-color: transparent;
  font-size: larger;
  font-weight: 600;
`;
const StyleTable = styled.table`
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;

  th {
    border: 2px solid black;
    width: 20vw;
    color:black;
    font-weight: 1000;
  }
  td {
    border: 2px solid black;
    width: 20vw;
  }
`;

export {
  StyleTable,
  Logout,
  Button,
  Container,
  Section1,
  StyledLink,
  StyledForm,
};
