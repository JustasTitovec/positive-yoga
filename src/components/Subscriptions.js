import React, { useState } from 'react';
import styled from 'styled-components';
// Components imports
import SubscriptionPricingItem from './SubscriptionPricingItem';
import SubscriptionAdvantages from './SubscriptionAdvantages';
import Button from './Button';
// Images imports
import paymentMethods from '../assets/paymentMethods.svg';
// Data from fetching information to component
import data from '../data';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Offer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Advantages = styled.div`
  h3 {
    font-size: 24px;
    width: 352px;
    margin: 32px 0px 48px 0px;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
      margin: 24px 0px;
    }
  }
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-right: 32px;
  h3 {
    font-size: 24px;
    margin: 32px 0px 16px 0px;
    span {
      color: #ff9b4e;
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    h3 {
      margin: 16px 0px;
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

const Terms = styled.p`
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin: 8px 0px;
  font-weight: 200;
  span {
    color: #90caf9;
    cursor: pointer;
  }
`;

const ContainerTitle = styled.h1`
  text-align: left;
  margin: 8px 0px;
  @media (max-width: 768px) {
    padding: 0px 16px;
    font-size: 28px;
  }
`;

const Subscriptions = ({ title }) => {
  const [option, setOption] = useState(23454);

  const plansTypes = data.plansTypes;
  const advantages = data.subscriptionAdvantages;

  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      <Offer>
        <Pricing>
          <h3>
            Choose your plan and get <span>7 days free trial</span>
          </h3>
          {plansTypes.map((type, i) => {
            return (
              <SubscriptionPricingItem
                key={i}
                planDuration={type.planDurationMonths}
                monthPrice={type.monthPrice}
                priceWithoutDiscount={type.priceWithoutDiscount}
                index={type.id}
                option={option}
                setOption={setOption}
              />
            );
          })}
          <Button label="Get your plan" primary />
          <Terms>
            Your free trial will automatically become a paid subscription on the
            8th day after you begin your trial. To cancel your subscription,
            please contact us at least 24 hours before the end of the trial
            period.
          </Terms>
          <Terms>
            By choosing a payment method you agree to the <span>T&Cs</span> and{' '}
            <span>Privacy Policy</span>
          </Terms>
          <img src={paymentMethods} alt="paymentMethods" />
        </Pricing>

        <Advantages>
          <h3>What's in my program?</h3>
          {advantages.map((advantage, index) => {
            return (
              <SubscriptionAdvantages
                key={index}
                ImgSrc={advantage.ImgSrc}
                title={advantage.title}
                subtitle={advantage.subtitle}
              />
            );
          })}
        </Advantages>
      </Offer>
    </Container>
  );
};

export default Subscriptions;
