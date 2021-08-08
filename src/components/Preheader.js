import React from 'react';
import styled from 'styled-components';

import discount from '../assets/discount.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: #90caf9;
  img {
    margin-right: 18px;
  }
  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 0.5px;
    span {
      font-weight: 400;
    }
  }
`;

const Preheader = () => {
  return (
    <Container className="preheader">
      <img src={discount} alt="discount" />
      <p>
        <span>50% </span>discount only valid for <span>00:15:49</span>
      </p>
    </Container>
  );
};

export default Preheader;
