import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

function Item({ item, onDelete, onChecked }) {
  return (
    <Li>
      <Form.Check type='checkbox' onClick={onChecked} />
      {item} <button onClick={onDelete}>X</button>
    </Li>
  );
}

export default Item;

const Li = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  line-height: 22px;
  text-align: center;

  list-style: none;
  font-size: 26px;
  font-weight: 500;
  color: #fff;

  .form-check-input {
    margin: 0;
    margin-right: 6px;
  }

  button {
    width: 22px;
    font-size: 18px;
    font-weight: bold;
    background: red;
    border-radius: 8px;
    color: #fff;
    margin-left: 8px;
    opacity: 0.8;
  }
`;
