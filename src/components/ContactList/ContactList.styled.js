import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
  list-style: none;
  justify-content: center;
  margin: 0;
  max-height: 150px;
  width: 95%;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
`;

export const Item = styled.li`
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 95%;
  margin: 5px;
  gap: 15px;
  height: 20px;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 2px 10px;
  border-radius: 4px;
  border: 1px solid rgb(73, 104, 104);
  margin-left: auto;
  cursor: pointer;
  transition: background-color 200ms linear;
  color: rgb(73, 104, 104);
  &:active,
  &:hover,
  &:focus {
    background-color: teal;
    color: white;
    border-color: trasparent;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  color: rgb(32, 37, 37);
`;

export const Number = styled.span`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(54, 92, 126);
`;
