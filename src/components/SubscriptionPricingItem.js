import React from 'react';
import styled from 'styled-components';
// Images imports
import check from '../assets/check.svg';

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  width: 352px;
  height: 131px;
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;
  cursor: pointer;

  .checkCircle {
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 50%;
  }
`;

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    display: flex;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    span {
      background-color: #ffe082;
      padding: 5px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      margin: 0px 8px;
    }
  }
  p {
    margin: 0;
    text-align: left;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    span {
      font-size: 32px;
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 15px;
      span {
        font-size: 24px;
      }
    }
  }
`;

const SelectedItemCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PricingDeal = styled.p`
  font-size: 14px;
  font-weight: 400;
  span {
    margin-left: 8px;
    color: #ff9b4e;
    font-weight: 700;
  }
`;
const SubscriptionPricingItem = ({
  planDuration,
  monthPrice,
  priceWithoutDiscount,
  index,
  option,
  setOption,
}) => {
  return (
    <Option
      onClick={() => setOption(index)}
      style={
        option === index
          ? { border: '2px solid #ff9b4e' }
          : { border: '2px solid rgba(0, 0, 0, 0.08)' }
      }
    >
      <PlanItem>
        <h5>
          {planDuration} month plan{' '}
          <span
            style={
              option === index && planDuration > 1
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
          >
            Save{' '}
            {Math.abs(
              Math.ceil(
                (planDuration * monthPrice * 100) / priceWithoutDiscount - 100
              )
            )}
            %
          </span>
        </h5>
        <h2>
          <span>${monthPrice} </span>/ month
        </h2>

        {planDuration > 1 ? (
          <PricingDeal>
            <del>${priceWithoutDiscount}</del>
            <span>${planDuration * monthPrice}</span> billed every{' '}
            {planDuration} months
          </PricingDeal>
        ) : (
          <PricingDeal>Billed monthly</PricingDeal>
        )}
      </PlanItem>
      <SelectedItemCheck>
        {option === index ? (
          <img src={check} alt="check" />
        ) : (
          <div className="checkCircle"></div>
        )}
      </SelectedItemCheck>
    </Option>
  );
};

export default SubscriptionPricingItem;
