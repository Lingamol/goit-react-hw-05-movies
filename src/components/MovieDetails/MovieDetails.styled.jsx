import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';
export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;

  padding-top: 20px;
  padding-bottom: 20px;
  list-style: none;
  margin: 0;
  padding-left: 20px;
`;
export const SecondaryNavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SecondaryNavLink = styled(NavLink)`
  /* padding: 8px 16px;
  border-radius: 4px; */
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: #3f51b5;
    /* background-color: #3f51b5; */
  }
`;
export const BtnBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(63, 81, 181);
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  width: 100px;

  &:hover {
    color: white;
    background-color: #3f51b5;
  }
  margin-bottom: 15px;
`;
export const BtnText = styled.span`
  display: block;
`;
export const SvgBtn = styled(IoArrowUndoSharp)`
  width: 20px;
  height: auto;

  color: rgb(63, 81, 181);
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  color: rgb(63, 81, 181);
`;
export const NavTitle = styled.p`
  padding-left: 10px;
  margin: 0;
  padding-top: 10px;
  font-weight: bolder;
  /* display: inline-block; */
  border-top: 1px solid black;
`;
