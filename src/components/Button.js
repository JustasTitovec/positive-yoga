import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  padding: 8px, 40px, 8px, 40px;
  font-size: 16px;
  color: #ffffff;
  background-color: #ff9b4e;
  box-shadow: 0px 16px 32px rgba(255, 155, 78, 0.24);
  border-radius: 8px;
  width: 350px;
  height: 56px;
  border: none;
  margin: 16px 0px;
  cursor: pointer;
  font-family: sans-serif;
`;

const Button = () => {
  return <PrimaryButton>Get your plan</PrimaryButton>;
};

export default Button;
