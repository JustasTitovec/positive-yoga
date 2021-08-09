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

  div {
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

const SubscriptionAdvantages = ({ ImgSrc, title, subtitle }) => {
  return (
    <Advantage>
      <img src={ImgSrc} alt="exercise" />
      <div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </Advantage>
  );
};

export default SubscriptionAdvantages;
