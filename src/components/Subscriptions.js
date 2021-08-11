import React, { useState } from 'react';
import styled from 'styled-components';
// Components imports
import SubscriptionPricingItem from './SubscriptionPricingItem';
import SubscriptionAdvantages from './SubscriptionAdvantages';
import Button from './Button';
// Images imports
import plan from '../assets/plan.svg';
import exercise from '../assets/exercise.svg';
import shoe from '../assets/shoe.svg';
import diet from '../assets/diet.svg';
import whistle from '../assets/whistle.svg';
import watch from '../assets/watch.svg';
import bookCheck from '../assets/bookCheck.svg';
import paymentMethods from '../assets/paymentMethods.svg';

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
  const [option, setOption] = useState(1);

  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      <Offer>
        <Pricing>
          <h3>
            Choose your plan and get <span>7 days free trial</span>
          </h3>
          <SubscriptionPricingItem
            planDuration={6}
            monthPrice={9.99}
            priceWithoutDiscount={119.94}
            index={1}
            option={option}
            setOption={setOption}
          />

          <SubscriptionPricingItem
            planDuration={3}
            monthPrice={14.99}
            priceWithoutDiscount={59.97}
            index={2}
            option={option}
            setOption={setOption}
          />

          <SubscriptionPricingItem
            planDuration={1}
            monthPrice={19.99}
            priceWithoutDiscount={59.97}
            index={3}
            option={option}
            setOption={setOption}
          />

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

          <SubscriptionAdvantages
            ImgSrc={plan}
            title="A personalized yoga program"
            subtitle="Completely safe and focused on your key goals"
          />

          <SubscriptionAdvantages
            ImgSrc={exercise}
            title="Easy & enjoyable yoga workouts for your level"
            subtitle="Program adjusts to your level and pace"
          />

          <SubscriptionAdvantages
            ImgSrc={shoe}
            title="No special preparation needed"
            subtitle="Perfect for begginners! Requires no special preparation or equipment"
          />

          <SubscriptionAdvantages
            ImgSrc={diet}
            title="Daily motivation & accountability"
            subtitle="Track your progress, develop a healthy routine, reach goals faster"
          />

          <SubscriptionAdvantages
            ImgSrc={whistle}
            title="Browse from various yoga challenges"
            subtitle="30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
          />

          <SubscriptionAdvantages
            ImgSrc={watch}
            title="Easy access on any device"
            subtitle="Do your yoga anywhere across all types of devices"
          />

          <SubscriptionAdvantages
            ImgSrc={bookCheck}
            title="A complete guide to get started"
            subtitle="Best tips, guidelines, advice, and recommendations for successful practice"
          />
        </Advantages>
      </Offer>
    </Container>
  );
};

export default Subscriptions;
