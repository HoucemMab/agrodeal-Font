import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CommandsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 2em;
`;

const CommandCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CommandTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const ProductInfo = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const TotalPrice = styled.p`
  font-size: 16px;
  color: #fd8d14;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #fd8d14;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #c51605;
  }
`;

const CommandsPage = () => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/commands")
      .then((response) => {
        setCommands(response.data);
      })
      .catch((error) => {
        console.error("Error fetching commands:", error);
      });
  }, []);

  const handleDeleteCommand = (commandId) => {
    // Delete the command with the specified ID
    axios
      .delete(`http://localhost:3000/commands/${commandId}`)
      .then(() => {
        // Remove the deleted command from the state
        setCommands((prevCommands) =>
          prevCommands.filter((command) => command.id !== commandId)
        );
      })
      .catch((error) => {
        console.error("Error deleting command:", error);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from local storage

    // Redirect if token is not "admin"
    if (token !== "admin") {
      window.location.href = "/unauthorized";
    }
  }, []);
  return (
    <CommandsContainer>
      {commands.map((command) => (
        <CommandCard key={command.id}>
          <CommandTitle>Commande {command.id}</CommandTitle>
          {command.listProducts.map((product) => (
            <ProductInfo key={product.id}>
              Produit ID: {product.id} - Nom: {product.productName} - Prix: $
              {product.productPrice}
            </ProductInfo>
          ))}
          <TotalPrice>Total: ${command.totalPrice}</TotalPrice>
          <DeleteButton onClick={() => handleDeleteCommand(command.id)}>
            <FontAwesomeIcon icon={faTrash} /> Supprimer
          </DeleteButton>
        </CommandCard>
      ))}
    </CommandsContainer>
  );
};

export default CommandsPage;
