import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #d32f2f;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const HeaderButton = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:active,
  &:focus {
    text-decoration: none;
    color: white;
  }
`;
