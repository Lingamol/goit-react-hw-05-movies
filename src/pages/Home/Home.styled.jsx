import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavLinkItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.li`
  /* border-radius: 5px; */
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 7px -7px 21px rgba(54, 80, 197, 0.6);
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
