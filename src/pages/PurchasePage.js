import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import jwtDecode from "jwt-decode";
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
const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;
const PurchasePage = ({ cartItem, removeFromCart, setCartItem }) => {
  // Example cart items data (replace with actual cart items)
  // const cartItems = [
  //   {
  //     id: 1,
  //     title: "Harribo",
  //     price: 19.99,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHZ_IrTCl2hiVrP1MHhyKLwT0TzDUlLqKjBqDO5g&s",
  //   },
  //   {
  //     id: 2,
  //     title: "Product Name 2",
  //     price: 29.99,
  //     image: "https://snackbox.tn/626-home_default/kinder-maxi-.jpg",
  //   },
  //   // Add more items as needed
  // ];
  const calculateTotalPrice = () => {
    const totalPrice = cartItem.reduce(
      (total, item) => total + parseFloat(item.productPrice),
      0
    );
    return totalPrice.toFixed(2);
  };
  useEffect(() => {
    console.log("From Purchase", cartItem);
  }, []);
  const handlePurchase = () => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Decode the token to get the ownerId
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const ownerUsername = decodedToken.ownerId;

      // Prepare the data to send to the API
      const commandData = {
        adresse: "123 Main St", // Replace with user's address
        ownerUsername: ownerUsername, // Use the decoded ownerId
        listProducts: cartItem.map((item) => {
          return {
            id: item.id,
            productName: item.productName,
            productPrice: item.productPrice,
            productPicture: item.productPicture,
            productDescription: item.productDescription,
            productType: item.productType,
          };
        }),
        totalPrice: cartItem.reduce(
          (total, item) => total + parseFloat(item.productPrice),
          0
        ),
      };

      // Send the POST request to the API
      axios
        .post("http://localhost:3000/commands", commandData)
        .then((response) => {
          console.log("Command stored:", response.data);
          // Clear the cart after successful purchase
          setCartItem([]);
        })
        .catch((error) => {
          console.error("Error storing command:", error);
        });
    } else {
      // Handle the case where the token is not available
      console.error("Token not found.");
    }
  };

  return (
    <PurchaseContainer>
      <PurchaseTitle>Votre Panier</PurchaseTitle>
      <CartContainer>
        {cartItem.length > 0 ? (
          cartItem.map((item) => {
            return (
              <CartItem key={item.id}>
                <CartImage src={item.productPicture} alt={item.productName} />
                <CartDetails>
                  <CartTitle>{item.productName}</CartTitle>
                  <CartPrice>${item.productPrice}</CartPrice>
                </CartDetails>
                <RemoveButton
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </RemoveButton>
              </CartItem>
            );
          })
        ) : (
          <EmptyCartMessage>Votre panier est vide.</EmptyCartMessage>
        )}
      </CartContainer>
      {cartItem.length > 0 && (
        <TotalPrice>Prix Totale: TND {calculateTotalPrice()}</TotalPrice>
      )}
      <PurchaseButton
        onClick={() => {
          handlePurchase();
        }}
      >
        Procéder à l'achat
      </PurchaseButton>
    </PurchaseContainer>
  );
};

export default PurchasePage;
