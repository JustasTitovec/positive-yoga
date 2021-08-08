import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Question = styled.div`
  width: 740px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin: 8px 0px;
  cursor: pointer;

  p {
    padding: 16px;
    font-weight: 200;
    line-height: 20px;
    margin-right: 20px;
    transition: 2s ease-in;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 16px;
    font-weight: 600;
    padding: 16px;
  }
  span {
    color: #424242;
    margin-right: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const QuestionItem = ({ question, answer, index }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Question index={index}>
      <Wrap onClick={() => toggle(index)}>
        <h5>{question}</h5>
        <span>
          {clicked === index ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </Wrap>
      {clicked === index ? <p>{answer}</p> : null}
    </Question>
  );
};

export default QuestionItem;
