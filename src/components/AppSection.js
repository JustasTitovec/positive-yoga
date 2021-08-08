import React from 'react';
import styled from 'styled-components';
import phoneApp1 from '../assets/phoneApp1.svg';
import phoneApp2 from '../assets/phoneApp2.svg';
import checkCircle from '../assets/checkCircle.svg';

const AppReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 48px 0px;
`;

const PhoneAppSide = styled.div`
  margin: 0px 32px;

  h3 {
    font-size: 24px;
    margin: 24px 0px;
  }
`;

const AppIcons = styled.div`
  display: flex;
`;

const AppPositiveEffect = styled.div`
  margin: 0px 32px;
  width: 350px;

  h3 {
    font-size: 24px;
    margin: 24px 0px;
  }
  p {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 0.4px;
    line-height: 20px;
    color: #424242;
  }

  li {
    display: flex;
    list-style: none;
    margin: 8px 0px;
    align-items: center;
    img {
      margin-right: 16px;
    }
  }
`;

const Image1 = styled.img`
  margin: 7px;
  background: #ffffff;
  border-radius: 24.5878px;
`;

const Image2 = styled.img`
  margin-top: 35px;
`;

const AppSection = () => {
  return (
    <AppReviewContainer>
      <PhoneAppSide>
        <h3>Start your yoga journey now!</h3>
        <AppIcons>
          <div>
            <Image1 src={phoneApp1} alt="phoneApp" />
          </div>
          <div>
            <Image2 className="olig" src={phoneApp2} alt="phoneApp" />
          </div>
        </AppIcons>
      </PhoneAppSide>
      <AppPositiveEffect>
        <h3>Is Positive Yoga right for me?</h3>
        <ul>
          <li>
            <img src={checkCircle} alt="check" />
            <p> Each program adapts to your age or fitness level</p>
          </li>
          <li>
            <img src={checkCircle} alt="check" />

            <p> Mindful way to exercise and get real results</p>
          </li>
          <li>
            <img src={checkCircle} alt="check" />

            <p>Effective and long-term lasting results</p>
          </li>
          <li>
            <img src={checkCircle} alt="check" />

            <p> Suited activities that benefit both the mind and body</p>
          </li>
          <li>
            <img src={checkCircle} alt="check" />

            <p> Low-intensity but highly-effective workouts</p>
          </li>
          <li>
            <img src={checkCircle} alt="check" />

            <p> Extra attention to muscle, joint and back health</p>
          </li>
        </ul>
      </AppPositiveEffect>
    </AppReviewContainer>
  );
};

export default AppSection;
