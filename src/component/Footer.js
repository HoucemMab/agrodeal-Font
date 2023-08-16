import React from "react";
import styled from "styled-components";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const FooterContainer = styled.footer`
  background-color: #232323;
  color: #fff;
  padding: 30px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const Icon = styled.span`
  font-size: 20px;
`;

const FakeText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <Icon>
              <FiMapPin />
            </Icon>
            <span>123 Street, City, Country</span>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <FiPhone />
            </Icon>
            <span>123-456-7890</span>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <FiMail />
            </Icon>
            <span>info@example.com</span>
          </ContactInfo>
        </FooterSection>
        <FooterSection>
          <SectionTitle>About Us</SectionTitle>
          <FakeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            libero non purus volutpat tempus.
          </FakeText>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
