import React from 'react';
import styled from 'styled-components';
import QuestionItem from './QuestionItem';
import Button from './Button';

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 8px 0px;
`;

const Questions = () => {
  return (
    <QuestionsContainer>
      <Title>Frequently Asked Questions</Title>
      <QuestionItem
        index={1}
        question="What happens after I order?"
        answer="After you place your order, we get to work!
Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
      />

      <QuestionItem
        index={2}
        question="Where I can access my plan?"
        answer="
        Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase."
      />

      <QuestionItem
        index={3}
        question="How can I cancel my subscription?"
        answer="
        You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app "
      />
      <QuestionItem
        index={4}
        question="Why this program is paid?"
        answer="We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!  "
      />
      <Button label="Get my plan" />
    </QuestionsContainer>
  );
};

export default Questions;
