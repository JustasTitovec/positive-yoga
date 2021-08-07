import React from 'react';
import styled from 'styled-components';

const Option = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 32px 8px 0px;
  width: 352px;
  height: 131px;
  padding: 16px;
  /* White */
  background: #ffffff;
  /* Primary */
  border: 2px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 16px;
  font-family: sans-serif;
  cursor: pointer;
  h5 {
    display: flex;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    span {
      background-color: #ffe082;
      padding: 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      font-family: sans-serif;
      margin: 0px 8px;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 400;

    span {
      font-size: 32px;
      font-weight: 600;
    }
  }
  p {
    font-size: 14px;
    font-weight: 200;
    span {
      color: #ff9b4e;
      margin-left: 8px;
    }
  }
`;

const SubscriptionOption = ({ children }) => {
  return <Option>{children}</Option>;
};

export default SubscriptionOption;
