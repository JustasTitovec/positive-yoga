import React from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';
import reviewPhoto1 from '../assets/reviewPhoto1.svg';
import reviewPhoto2 from '../assets/reviewPhoto2.svg';
import reviewPhoto3 from '../assets/reviewPhoto3.svg';
import PrimaryButton from './Button';
import Carousel from './Carousel';

const ReviewSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 24px;
    margin: 24px 0px;
    color: #22222c;
  }
`;

const TomatoButton = styled(PrimaryButton)`
  margin-top: 48px 0px;
`;

const Reviews = () => {
  return (
    <ReviewContainer>
      <h3>Hear success stories from our clients</h3>
      <ReviewSection>
        <Carousel>
          <ReviewItem
            name="Emily, 28"
            place="Delaware, NJ"
            ratingValue={5}
            personImg={reviewPhoto1}
            review="I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
          />
          <ReviewItem
            name="Kylie, 40"
            place="Los Angeles"
            ratingValue={5}
            personImg={reviewPhoto2}
            reviewText=""
            review="I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."
          />

          <ReviewItem
            name="Jesica, 51"
            place="San Francisco, CA"
            ratingValue={5}
            personImg={reviewPhoto3}
            review="I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.
        "
          />
        </Carousel>
      </ReviewSection>
      <TomatoButton label="Get my plan" />
    </ReviewContainer>
  );
};

export default Reviews;
