import React from 'react';
import styled from 'styled-components';
import QuestionItem from './QuestionItem';

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
        answer="After you place your order, we get to work!
Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
      />

      <QuestionItem
        index={3}
        question="How can I cancel my subscription?"
        answer="After you place your order, we get to work!
Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
      />
      <QuestionItem
        index={4}
        question="Why this program is paid?"
        answer="After you place your order, we get to work!
Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
      />
    </QuestionsContainer>
  );
};

export default Questions;
