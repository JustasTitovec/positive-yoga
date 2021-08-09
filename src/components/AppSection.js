import React from 'react';
import styled from 'styled-components';
import phoneApp1 from '../assets/phoneApp1.svg';
import phoneApp2 from '../assets/phoneApp2.svg';
import checkCircle from '../assets/checkCircle.svg';

const AppReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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

const AppCheckList = styled.div`
  margin: 0px 32px;
  width: 350px;
  h3 {
    font-size: 24px;
    margin: 24px 0px;
  }
`;

const AppIconsLeft = styled.div`
  margin: 7px;
  background: #ffffff;
  border-radius: 24.5878px;
`;

const AppIconsRight = styled.div`
  margin-top: 35px;
`;

const CheckList = styled.ul``;

const CheckItem = styled.li`
  display: flex;
  list-style: none;
  margin: 8px 0px;
  align-items: center;
`;

const CheckItemTextImage = styled.img`
  margin-right: 16px;
`;

const CheckItemText = styled.ul`
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 20px;
  color: #424242;
`;

const AppSection = () => {
  return (
    <AppReviewContainer>
      <PhoneAppSide>
        <h3>Start your yoga journey now!</h3>
        <AppIcons>
          <AppIconsLeft>
            <img src={phoneApp1} alt="phoneApp" />
          </AppIconsLeft>
          <AppIconsRight>
            <img src={phoneApp2} alt="phoneApp" />
          </AppIconsRight>
        </AppIcons>
      </PhoneAppSide>
      <AppCheckList>
        <h3>Is Positive Yoga right for me?</h3>
        <CheckList>
          <CheckItem>
            <CheckItemTextImage src={checkCircle} alt="check" />
            <CheckItemText>
              Each program adapts to your age or fitness level
            </CheckItemText>
          </CheckItem>
          <CheckItem>
            <CheckItemTextImage src={checkCircle} alt="check" />
            <CheckItemText>
              Mindful way to exercise and get real results
            </CheckItemText>
          </CheckItem>
          <CheckItem>
            <CheckItemTextImage src={checkCircle} alt="check" />
            <CheckItemText>
              Effective and long-term lasting results
            </CheckItemText>
          </CheckItem>
          <CheckItem>
            <CheckItemTextImage src={checkCircle} alt="check" />
            <CheckItemText>
              Suited activities that benefit both the mind and body
            </CheckItemText>
          </CheckItem>
          <CheckItem>
            <CheckItemTextImage src={checkCircle} alt="check" />
            <CheckItemText>
              Low-intensity but highly-effective workouts
            </CheckItemText>
          </CheckItem>
          <CheckItem>
            <CheckItemTextImage src={checkCircle} alt="check" />
            <CheckItemText>
              Extra attention to muscle, joint and back health
            </CheckItemText>
          </CheckItem>
        </CheckList>
      </AppCheckList>
    </AppReviewContainer>
  );
};

export default AppSection;
