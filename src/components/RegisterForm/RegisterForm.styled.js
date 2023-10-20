import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  width: 320px;
`;

export const SignUp = styled.h1`
  font-size: 48px;
  font-weight: bold;
  font-family: Segoe UI;
  color: teal;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  font-family: Segoe UI;
  color: #5e5e5e;
`;

export const Input = styled.input`
  color: #5e5e5e;
  padding: 16px;
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.2;
  outline: 1px solid grey;
  border: none;
  border-radius: 8px;
  width: 350px;
  cursor: pointer;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: none;
    outline: 2px solid teal;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: Segoe UI;
  padding: 16px;
  margin-bottom: 16px;
  color: teal;
  background-color: white;
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: white;
    background-color: teal;
    border-color: none;
  }
`;
