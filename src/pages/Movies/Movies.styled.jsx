import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { GoSearch } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
export const SearchBarWrapper = styled.header`
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const FormInput = styled(Field)`
  /* margin-top: 5px; */
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    background-color: #858dbb;
  }
`;
export const FormErrorMessage = styled.span`
  color: red;
  /* background-color: rgb(63, 81, 181); */
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const SearchFormButtonLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const SvgBtn = styled(GoSearch)`
  width: 30px;
  height: auto;

  color: rgb(63, 81, 181);
`;
export const FormRadioInput = styled.input``;
export const RadioWraper = styled.div`
  display: flex;
  /* flex-direction: column; */
  color: black;
  margin-left: 10px;
`;
export const LabelRadio = styled.label`
  :not(:last-child) {
    margin-right: 5px;
  }
`;

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
