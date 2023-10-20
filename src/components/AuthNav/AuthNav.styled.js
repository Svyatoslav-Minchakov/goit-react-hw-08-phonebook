import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #5e5e5e;
  font-weight: 500;
  &.active {
    color: white;
    background-color: teal;
  }
`;
