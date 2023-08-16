import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PurchaseTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const CartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const CartDetails = styled.div`
  flex: 1;
`;

const CartTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CartPrice = styled.p`
  font-size: 16px;
  color: #fd8d14;
  margin: 5px 0;
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  font-style: italic;
  color: #aaa;
`;
const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  color: #fd8d14;
`;
const PurchaseButton = styled.button`
  background-color: #fd8d14;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1em;

  &:hover {
    background-color: #c51605;
  }
`;
const PurchasePage = ({ cartItems }) => {
  // Example cart items data (replace with actual cart items)
  //   const cartItems = [
  //     {
  //       id: 1,
  //       title: "Harribo",
  //       price: 19.99,
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHZ_IrTCl2hiVrP1MHhyKLwT0TzDUlLqKjBqDO5g&s",
  //     },
  //     {
  //       id: 2,
  //       title: "Product Name 2",
  //       price: 29.99,
  //       image: "https://snackbox.tn/626-home_default/kinder-maxi-.jpg",
  //     },
  //     // Add more items as needed
  //   ];

  useEffect(() => {
    console.log("From Purchase", cartItems);
  }, [cartItems]);
  return (
    <PurchaseContainer>
      <PurchaseTitle>Votre Panier</PurchaseTitle>
      <CartContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartImage src={item.image} alt={item.title} />
              <CartDetails>
                <CartTitle>{item.title}</CartTitle>
                <CartPrice>${item.price.toFixed(2)}</CartPrice>
              </CartDetails>
              <RemoveButton>
                <FontAwesomeIcon icon={faTrash} />
              </RemoveButton>
            </CartItem>
          ))
        ) : (
          <EmptyCartMessage>Votre panier est vide.</EmptyCartMessage>
        )}
      </CartContainer>
      <PurchaseButton>Procéder à l'achat</PurchaseButton>
    </PurchaseContainer>
  );
};

export default PurchasePage;
