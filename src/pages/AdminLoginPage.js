import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

const AdminLoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffe17b;
`;

const LoginForm = styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #c51605;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 1em;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
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

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/admin/login", { username: email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", "admin");
        window.location.href = "/admin/dashboard";
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <AdminLoginPageContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Connexion Administrateur</Title>
        <InputContainer>
          <Icon>
            <FaEnvelope />
          </Icon>
          <Input
            type="input"
            placeholder="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Icon>
            <FaLock />
          </Icon>
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <LoginButton type="submit">Connexion</LoginButton>
      </LoginForm>
    </AdminLoginPageContainer>
  );
};

export default AdminLoginPage;
