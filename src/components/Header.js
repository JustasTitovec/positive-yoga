import React from 'react';
import styled from 'styled-components';

import yogaLogo from '../assets/yoga-logo.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

const Header = () => {
  return (
    <Container className="header">
      <img src={yogaLogo} alt="yoga-logo" />
    </Container>
  );
};

export default Header;
