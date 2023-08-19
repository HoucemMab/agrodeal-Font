import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductList = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 800px;
  padding: 0;
`;

const ProductListItem = styled.li`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #c51605;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fd8d14;
  }
`;

const AddProductButton = styled(Link)`
  background-color: #fd8d14;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c51605;
  }
`;

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    // Delete the product with the given productId
    axios
      .delete(`http://localhost:3000/product/${productId}`)
      .then(() => {
        // Remove the deleted product from the products list
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
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
    <AdminPageContainer>
      <h1>Admin Dashboard</h1>
      <AddProductButton to="/admin/addproduct">
        Ajouter Produit
      </AddProductButton>
      <ProductList>
        {products.map((product) => (
          <ProductListItem key={product.id}>
            <ProductInfo>
              <ProductImage
                src={product.productPicture}
                alt={product.productName}
              />
              <ProductTitle>{product.productName}</ProductTitle>
            </ProductInfo>
            <DeleteButton onClick={() => handleDeleteProduct(product.id)}>
              Supprimer
            </DeleteButton>
          </ProductListItem>
        ))}
      </ProductList>
    </AdminPageContainer>
  );
};

export default AdminProductPage;
