import styled from 'styled-components';

export const LabelFilter = styled.label`
  font-size: 16px;
  text-align: center;
  display: block;
  color: #5e5e5e;
`;

export const InputFilter = styled.input`
  color: #5e5e5e;
  display: block;
  border: 1px solid rgba(33, 33, 33, 0.3);
  border-radius: 4px;
  height: 25px;
  width: 80%;
  font-size: 16px;
  margin: 10px auto;
  margin-bottom: 20px;
  &:focus {
    outline-color: teal;
  }
`;

export const Container = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
  margin-bottom: 10px;
  margin-top: 10px;
`;
