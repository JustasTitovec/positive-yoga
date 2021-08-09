import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Question = styled.div`
  width: 740px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin: 4px 0px;
  padding: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 200;
    line-height: 20px;
    margin-top: 16px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  span {
    color: #424242;
    margin-right: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const QuestionItem = ({ question, answer, index }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Question index={index}>
      <Wrap onClick={() => toggle(index)}>
        <h5>{question}</h5>
        <span>{clicked ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}</span>
      </Wrap>
      {clicked ? <p>{answer}</p> : null}
    </Question>
  );
};

export default QuestionItem;