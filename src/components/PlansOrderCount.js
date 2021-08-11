import React from 'react';
import styled from 'styled-components';

const PlansOrderCountItem = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 200;
  margin-top: 48px;
  @media (max-width: 450px) {
    width: 100%;
    padding: 0px 16px;
    margin-top: 16px;
    justify-content: flex-start;
  }

  span {
    font-weight: 600;
  }
`;

const PlansOrderCount = () => {
  return (
    <PlansOrderCountItem>
      <div>
        Over <span> 52 147</span> plans ordered.
      </div>
    </PlansOrderCountItem>
  );
};

export default PlansOrderCount;
