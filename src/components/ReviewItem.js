import React from 'react';
import styled from 'styled-components';
import ratingStar from '../assets/ratingStar.svg';

const Review = styled.div`
  margin-top: 25px;
  margin-right: 16px;
  width: 320px;
  padding: 16px;
  /* White */

  background: #ffffff;
  /* Card-shadow */

  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: 16px;
  h5 {
    //styleName: Heading 5/H5 Mobile;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.4000000059604645px;
    text-align: left;
  }
  span {
    //styleName: Caption/Caption Mobile;
    font-size: 12px;
  }
`;

const ReviewText = styled.p`
  //styleName: Paragraph Regular/P Regular Mobile;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 100;
  line-height: 24px;
  color: #22222c;
  &[review='Positive'] {
    font-weight: 700;
  }
`;

const Rating = styled.div`
  margin-top: 18px;
`;

const ReviewItem = ({ name, place, ratingValue, personImg, review }) => {
  return (
    <Review>
      <h5>{name}</h5>
      <span>{place}</span>
      <Rating>
        <span>
          {ratingValue >= 1 ? <img src={ratingStar} alt="start" /> : null}
        </span>
        <span>
          {ratingValue >= 2 ? <img src={ratingStar} alt="start" /> : null}
        </span>
        <span>
          {ratingValue >= 3 ? <img src={ratingStar} alt="start" /> : null}
        </span>
        <span>
          {ratingValue >= 4 ? <img src={ratingStar} alt="start" /> : null}
        </span>
        <span>
          {ratingValue >= 5 ? <img src={ratingStar} alt="start" /> : null}
        </span>
      </Rating>
      <img src={personImg} alt="person" />
      <ReviewText>{review}</ReviewText>
    </Review>
  );
};

export default ReviewItem;
