import React from 'react';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';

const ContactWrapper = styled.div`
  width: 60%;
  margin: 100px auto;
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  font-weight: 500;
  margin-top: 50px;
`;
const Caption = styled.p`
  color: ${({ theme }) => theme.text.primary};
  margin-top: 20px;
`;
const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.text.primary};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-weight: 400;
  border: none;
  outline: none;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease 0s;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
  padding: 15px 30px;
  margin-top: 20px;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionTitle title="Let's work together!" />
      <SubTitle>Take your business online</SubTitle>
      <Caption>
        Do you have a project idea?
        <br />
        Let me help you to grow your business
        <br />
        & increase your client base
        <br />
      </Caption>
      <StyledButton>Get in touch</StyledButton>
    </ContactWrapper>
  );
};

export default Contact;
