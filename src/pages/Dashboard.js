import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  faList,
  faPlus,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AdminMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1000px;
  padding: 20px;
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fd8d14;
    color: #fff;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 36px;
  margin-bottom: 10px;
`;

const AdminDashboard = () => {
  return (
    <AdminDashboardContainer>
      <AdminMenu>
        <MenuItem to="/admin/addproduct">
          <Icon icon={faPlus} />
          Ajouter Produit
        </MenuItem>
        <MenuItem to="/admin/productPage">
          <Icon icon={faList} />
          Liste des Produits
        </MenuItem>
        <MenuItem to="/admin/usermanagement">
          <Icon icon={faUser} />
          Gestion des Utilisateurs
        </MenuItem>
        <MenuItem to="/admin/commands">
          <Icon icon={faShoppingCart} />
          Page des Commandes
        </MenuItem>
      </AdminMenu>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
