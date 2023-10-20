import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 15px;
  border: 1px solid grey;
  border-radius: 4px;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Button = styled.button`
  border: 1px solid rgb(73, 104, 104);
  height: 30px;
  align-self: center;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 200ms linear;
  color: rgb(73, 104, 104);
  &:hover,
  &:focus {
    background-color: teal;
    color: white;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  gap: 3px;
  flex-direction: column;
  font-family: Cambria;
  font-weight: 700;
  font-size: 18px;
  color: #5e5e5e;
`;

export const InputForm = styled.input`
  color: #5e5e5e;
  height: 25px;
  font-family: Cambria;
  font-weight: 400;
  font-size: 18px;
  border: none;
  outline: 1px solid gray;
  border-radius: 5px;
  &:focus {
    outline: 2px solid teal;
  }
`;
