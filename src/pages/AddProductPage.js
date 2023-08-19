import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AddProductPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AddProductForm = styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
`;

const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
`;

const SubmitButton = styled.button`
  background-color: #c51605;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a30f03;
  }
`;
const ProductTypeSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
`;

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productType, setProductType] = useState("Petit Déjeuner");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      productPrice,
      productPicture,
      productDescription,
      productType,
    };

    try {
      await axios.post("http://localhost:3000/product", newProduct);
      // Handle success, e.g. show a success message
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, e.g. show an error message
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from local storage

    // Redirect if token is not "admin"
    if (token !== "admin") {
      window.location.href = "/unauthorized";
    }
  }, []);
  return (
    <AddProductPageContainer>
      <AddProductForm onSubmit={handleAddProduct}>
        <Title>Ajouter un Nouveau Produit</Title>
        <Input
          type="text"
          placeholder="Nom du produit"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Prix du produit"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <Input
          type="url"
          placeholder="Lien de l'image du produit"
          value={productPicture}
          onChange={(e) => setProductPicture(e.target.value)}
        />

        <ProductTypeSelect
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option value="">Sélectionner un type</option>
          <option value="Petit Déjeuner">Petit Déjeuner</option>
          <option value="Epécerie Sucré">Epécerie Sucré</option>
          <option value="Epécerie Salée">Epécerie Salée</option>
        </ProductTypeSelect>
        <DescriptionInput
          placeholder="Description du produit"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <SubmitButton type="submit">Ajouter le Produit</SubmitButton>
      </AddProductForm>
    </AddProductPageContainer>
  );
};

export default AddProductPage;
