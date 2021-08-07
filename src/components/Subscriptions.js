import React from 'react';
import styled from 'styled-components';
import SubscriptionPricing from './SubscriptionPricing';
import PrimaryButton from './Button';
import SubscriptionAdvantages from './SubscriptionAdvantages';
import plan from '../assets/plan.svg';
import exercise from '../assets/exercise.svg';
import shoe from '../assets/shoe.svg';
import diet from '../assets/diet.svg';
import whistle from '../assets/whistle.svg';
import watch from '../assets/watch.svg';
import bookCheck from '../assets/bookCheck.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  h1 {
    font-family: sans-serif;
    margin-bottom: 32px;
  }

  p {
    color: black;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 200;
    color: #22222c;
    margin-bottom: 8px;
    span {
      font-weight: 600;
    }
  }
`;

const Offer = styled.div`
  display: flex;
`;

const Advantages = styled.div`
  h3 {
    font-size: 24px;
    font-family: sans-serif;
    width: 352px;
    margin-bottom: 35px;
  }
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
    font-family: sans-serif;
    width: 352px;

    span {
      color: #ff9b4e;
      font-weight: 700;
    }
  }
`;

const Subscriptions = () => {
  return (
    <Container>
      <p>
        Over <span>52 147</span> plans ordered.
      </p>
      <h1>Get access to your yoga program now!</h1>
      <Offer>
        <Pricing>
          <h3>
            Choose your plan and get <span>7 days free trial</span>
          </h3>
          <SubscriptionPricing>
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
          </SubscriptionPricing>
          <SubscriptionPricing>
            <h5>3 month plan</h5>
            <h2>
              <span>$14.99 </span>/ month
            </h2>
            <p>
              <del>$59.97</del>
              <span>$44.97</span> billed every 6 months
            </p>
          </SubscriptionPricing>
          <SubscriptionPricing>
            <h5>1 month plan</h5>
            <h2>
              <span>$19.99 </span>/ month
            </h2>
            <p>Billed monthly</p>
          </SubscriptionPricing>
          <PrimaryButton />
        </Pricing>
        <Advantages>
          <h3>What's in my program?</h3>
          <SubscriptionAdvantages>
            <img src={plan} alt="plan" />
            <div>
              <h5>A personalized yoga program</h5>
              <p>Completely safe and focused on your key goals</p>
            </div>
          </SubscriptionAdvantages>
          <SubscriptionAdvantages>
            <img src={exercise} alt="exercise" />
            <div>
              <h5>Easy & enjoyable yoga workouts for your level</h5>
              <p>Program adjusts to your level and pace</p>
            </div>
          </SubscriptionAdvantages>
          <SubscriptionAdvantages>
            <img src={shoe} alt="shoe" />
            <div>
              <h5>No special preparation needed</h5>
              <p>
                Perfect for begginners! Requires no special preparation or
                equipment
              </p>
            </div>
          </SubscriptionAdvantages>
          <SubscriptionAdvantages>
            <img src={diet} alt="diet" />
            <div>
              <h5>Daily motivation & accountability</h5>
              <p>
                Track your progress, develop a healthy routine, reach goals
                faster
              </p>
            </div>
          </SubscriptionAdvantages>
          <SubscriptionAdvantages>
            <img src={whistle} alt="whistle" />
            <div>
              <h5>Browse from various yoga challenges</h5>
              <p>
                30 d morning yoga, mindful yoga, back flexibility challenge, and
                more!
              </p>
            </div>
          </SubscriptionAdvantages>
          <SubscriptionAdvantages>
            <img src={watch} alt="watch" />
            <div>
              <h5>Easy access on any device</h5>
              <p>Do your yoga anywhere across all types of devices</p>
            </div>
          </SubscriptionAdvantages>
          <SubscriptionAdvantages>
            <img src={bookCheck} alt="bookCheck" />
            <div>
              <h5>A complete guide to get started</h5>
              <p>
                Best tips, guidelines, advice, and recommendations for
                successful practice
              </p>
            </div>
          </SubscriptionAdvantages>
        </Advantages>
      </Offer>
    </Container>
  );
};

export default Subscriptions;
