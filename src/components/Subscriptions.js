import React from 'react';
import styled from 'styled-components';
import SubscriptionPricingITem from './SubscriptionPricing';
import Button from './Button';
import SubscriptionAdvantages from './SubscriptionAdvantages';
import plan from '../assets/plan.svg';
import exercise from '../assets/exercise.svg';
import shoe from '../assets/shoe.svg';
import diet from '../assets/diet.svg';
import whistle from '../assets/whistle.svg';
import watch from '../assets/watch.svg';
import bookCheck from '../assets/bookCheck.svg';
import check from '../assets/check.svg';
import paymentMethods from '../assets/paymentMethods.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 48px 0px 16px 0px;

  p {
    color: black;
    font-size: 14px;
    font-weight: 200;
    color: #22222c;

    span {
      font-weight: 600;
    }
  }
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
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-right: 32px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
  h3 {
    font-size: 24px;
    margin: 32px 0px 16px 0px;
    span {
      color: #ff9b4e;
      font-weight: 700;
    }
  }

  p {
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    letter-spacing: 0.5px;
    margin: 8px 0px;
    span {
      color: #90caf9;
      font-weight: 200;
      cursor: pointer;
    }
  }
`;

const ContainerTitle = styled.h1`
  text-align: left;
  margin: 8px 0px;
`;

const Subscriptions = ({ title }) => {
  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      <Offer>
        <Pricing>
          <h3>
            Choose your plan and get <span>7 days free trial</span>
          </h3>
          <SubscriptionPricingITem onClick={(e) => console.log('clicked 1')}>
            <div className="plans">
              <h5>
                6 month plan <span>Save 50% </span>
              </h5>
              <h2>
                <span>$9.99 </span>/ month
              </h2>
              <p>
                <del>$119.99</del>
                <span>$59.94</span> billed every 6 months
              </p>
            </div>
            <div className="check">
              <img src={check} alt="check" />
            </div>
          </SubscriptionPricingITem>
          <SubscriptionPricingITem onClick={(e) => console.log('clicked 2')}>
            <div className="plans">
              <h5>3 month plan</h5>
              <h2>
                <span>$14.99 </span>/ month
              </h2>
              <p>
                <del>$59.97</del>
                <span>$44.97</span> billed every 6 months
              </p>
            </div>
            <div className="check">
              <img src={check} alt="check" />
            </div>
          </SubscriptionPricingITem>
          <SubscriptionPricingITem onClick={(e) => console.log('clicked 3')}>
            <div className="plans">
              <h5>1 month plan</h5>
              <h2>
                <span>$19.99 </span>/ month
              </h2>
              <p>Billed monthly</p>
            </div>
            <div className="check">
              <img src={check} alt="check" />
            </div>
          </SubscriptionPricingITem>
          <Button label="Get your plan" primary />
          <p>
            Your free trial will automatically become a paid subscription on the
            8th day after you begin your trial. To cancel your subscription,
            please contact us at least 24 hours before the end of the trial
            period.
          </p>
          <p>
            By choosing a payment method you agree to the <span>T&Cs</span> and{' '}
            <span>Privacy Policy</span>
          </p>
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
