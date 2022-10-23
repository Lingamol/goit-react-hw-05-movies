import styled from '@emotion/styled';
export const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const CardWrapper = styled.li`
  cursor: pointer;
  /* transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 7px -7px 21px rgba(54, 80, 197, 0.6);
  }

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  } */
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
export const ActorName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
export const ActorCharacter = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: lighter;
  color: black;
`;
export const CardImg = styled.img`
  /* display: block; */
  width: 100%;
  height: 240px;
`;
