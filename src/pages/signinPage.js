import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const SigninForm = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SigninTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  margin-right: 2em;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
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

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data for authentication here
    axios.post("http://localhost:3000/user/login", formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data);
      window.location.href = "/";
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
    <SigninContainer>
      <SigninForm onSubmit={handleSubmit}>
        <SigninTitle>Se Connecter</SigninTitle>
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
        <SubmitButton type="submit">Se Connecter</SubmitButton>
      </SigninForm>
    </SigninContainer>
  );
};

export default SigninPage;
