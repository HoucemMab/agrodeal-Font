import React from "react";
import styled from "styled-components";

const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
  color: #555;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled.button`
  background-color: #fd8d14;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c51605;
  }
`;

const UnauthorizedPage = () => {
  return (
    <UnauthorizedContainer>
      <Message>
        Désolé, vous n'avez pas l'autorisation d'accéder à cette page.
      </Message>
      <ButtonContainer>
        <a href="/signup">
          <StyledButton>S'inscrire</StyledButton>
        </a>
        <a href="/signin">
          <StyledButton>Connexion</StyledButton>
        </a>
      </ButtonContainer>
    </UnauthorizedContainer>
  );
};

export default UnauthorizedPage;
