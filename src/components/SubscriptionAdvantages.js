import React from 'react';
import styled from 'styled-components';

const Advantage = styled.div`
  display: flex;
  align-items: center;
  line-height: 24px;
  margin-bottom: 10px;
  width: 345px;

  img {
    margin-right: 16px;
  }

  h5 {
    font-size: 16px;
    width: 289px;
  }
  div {
    p {
      font-size: 12px;
    }
  }
`;

const SubscriptionAdvantages = ({ children }) => {
  return <Advantage>{children}</Advantage>;
};

export default SubscriptionAdvantages;
