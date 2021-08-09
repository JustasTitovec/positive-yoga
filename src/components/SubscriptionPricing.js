import React, { useState } from 'react';
import styled from 'styled-components';

const Option = styled.div`
  /* Auto Layout */
  display: flex;
  justify-content: space-between;
  margin: 4px 0px;

  width: 352px;
  height: 131px;
  padding: 16px;
  /* White */
  background: #ffffff;
  /* Primary */
  border: 2px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 16px;

  .plans {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  }

  .check {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  cursor: pointer;
  h5 {
    display: flex;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    span {
      background-color: #ffe082;
      padding: 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      margin: 0px 8px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 200;
    span {
      margin-left: 8px;
      color: #ffe082;
    }
  }
`;

const SubscriptionPricingITem = ({
  planDuration,
  monthPrice,
  checkImg,
  priceWithoutDiscount,
}) => {
  return (
    <Option>
      <div className="plans">
        <h5>
          {planDuration} month plan{' '}
          <span>
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
          <p>
            <del>${priceWithoutDiscount}</del>
            <span>${planDuration * monthPrice}</span> billed every{' '}
            {planDuration} months
          </p>
        ) : (
          <p>Billed every {planDuration} month`</p>
        )}
      </div>
      <div className="check">
        <img src={checkImg} alt="check" />
      </div>
    </Option>
  );
};

export default SubscriptionPricingITem;
