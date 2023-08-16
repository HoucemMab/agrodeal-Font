import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current location from the router

  const isLoginOrRegister =
    location.pathname === "/signin" || location.pathname === "/signup";
  return isLoginOrRegister ? (
    <>{children}</>
  ) : (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
