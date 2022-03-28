import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "styled-components";

const Image = style.img`
height:400px;
width:500px;
border:2px solid black;
border-radius:2%;
`;

export const SingleProductPage = () => {
  const [user, setUser] = useState([]);
  const { userid } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/products/${userid}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      Title:- <div>{user.title}</div>
      <br />
      <Image src={user.images} alt=""></Image>
      <br />
      Price:- <div>{user.price}</div>
      <br />
      Discount Percentage:- <div>{user.discountPercentage}</div>
      <br />
      Description :- <div>{user.description}</div>
      <br />
      Category:- <div>{user.category}</div>
      <br />
      Rating :-<div>{user.rating}</div>
      <br />
      Brand:- <div>{user.brand}</div>
    </>
  );
};
