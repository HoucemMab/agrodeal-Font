import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AdminUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UserList = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 800px;
  padding: 0;
`;

const UserCard = styled.li`
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

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const UserEmail = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 5px 0;
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

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    // Delete the user with the given userId
    axios
      .delete(`http://localhost:3000/user/${userId}`)
      .then(() => {
        // Remove the deleted user from the users list
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
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
    <AdminUserPageContainer>
      <h1>User Management</h1>
      <UserList>
        {users.map((user) => (
          <UserCard key={user.id}>
            <UserInfo>
              <UserName>{user.username}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserInfo>
            <DeleteButton onClick={() => handleDeleteUser(user.id)}>
              Supprimer
            </DeleteButton>
          </UserCard>
        ))}
      </UserList>
    </AdminUserPageContainer>
  );
};

export default AdminUserPage;
