import React from 'react';
import styled from 'styled-components';
import SubscriptionOption from './SubscriptionPricing';
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
  margin-top: 48px;
  h1 {
    margin-bottom: 32px;
  }

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
`;

const Advantages = styled.div`
  h3 {
    font-size: 24px;
    width: 352px;
    margin-bottom: 35px;
  }
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-right: 32px;
  h3 {
    font-size: 24px;

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
    margin-bottom: 16px;
    span {
      color: #90caf9;
      font-weight: 200;
      cursor: pointer;
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
          <SubscriptionOption onClick={(e) => console.log('clicked 1')}>
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
          </SubscriptionOption>
          <SubscriptionOption onClick={(e) => console.log('clicked 2')}>
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
          </SubscriptionOption>
          <SubscriptionOption onClick={(e) => console.log('clicked 3')}>
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
          </SubscriptionOption>
          <Button label="Get your plan" />
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
