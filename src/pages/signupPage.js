import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const SignupForm = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 20%;
`;

const SignupTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  margin-right: 2em;
  margin-bottom: 20px;
  position: relative; /* Add this to allow icon positioning */
`;

const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;
const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #ccc;
`;
const InputField = styled.input`
  width: 100%;
  padding: 10px 30px; /* Add padding to accommodate the icon */

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

const SubmitButton = styled.button`
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

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the endpoint here
    axios
      .post("http://localhost:3000/user", formData)
      .then((res) => {
        console.log(res);
        window.location.href = "/signin";
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <SignupTitle>S'inscrire</SignupTitle>
        <InputGroup>
          <InputLabel>Nom d'utilisateur</InputLabel>
          <InputField
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Adresse email</InputLabel>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Mot de passe</InputLabel>
          <InputField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Prénom</InputLabel>
          <InputField
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Nom de famille</InputLabel>
          <InputField
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        <SubmitButton type="submit">S'inscrire</SubmitButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignupPage;
