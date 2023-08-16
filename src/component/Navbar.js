import React from "react";
import styled from "styled-components";
import { FiPhone, FiUser, FiLogIn, FiEdit } from "react-icons/fi";

const NavbarContainer = styled.nav`
  background-color: #f7ca18;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
`;

const MarketName = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 800;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: #fd8d14; /* Change to your preferred hover color */
    transform: scale(1.05); /* Add a slight scale effect */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <CompanyInfo>
        <FiPhone size={16} />
        <p>22222222</p>
      </CompanyInfo>
      <MarketName>AgroDeal</MarketName>
      <ActionButtons>
        <Button>
          <FiEdit size={18} />
          <span>S'inscrire</span>
        </Button>
        <Button>
          <FiLogIn size={18} />
          <span>Connexion</span>
        </Button>
      </ActionButtons>
    </NavbarContainer>
  );
};

export default Navbar;
