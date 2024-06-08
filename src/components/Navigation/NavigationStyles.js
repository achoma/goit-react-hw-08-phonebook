import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  background-color: #1f2937;
  padding: 2rem;
  display: flex;
  justify-content: center;

  border-bottom: 2px solid white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  gap: 2.5rem;
`;

export const StyledLi = styled.li`
  margin-right: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
