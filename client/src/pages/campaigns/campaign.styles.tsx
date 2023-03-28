import styled from "@emotion/styled";
import { css } from "@mui/material";

export const Container = styled.section`
  width: 70rem;
  height: 30rem;
  padding: 0.4rem;
  overflow: hidden;
  background-color: #35baf6;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  overflow: auto;
  background: transparent;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemContainer = styled.li<{ isBorder: boolean; inView: boolean; }>`
  width: 100%;
  height: 7rem;
  padding: 0.6rem;
  background: white;
  display: grid;
  grid-template-areas:
    "title goal current_amount button"
    "description description description button"
    "description description description button";

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  column-gap: 1rem;
  transition: all 500ms;

  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 0.1rem solid black;
    `};

    ${({ inView }) =>
    !inView &&
    css`
      opacity: 0;
    `};
`;

export const Title = styled.h1`
  grid-area: title;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export const Description = styled.h1`
  grid-area: description;
  display: block;
  padding: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export const Goal = styled.span<{ isEnough: boolean }>`
  grid-area: goal;
  display: block;
  padding: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #f44336
    ${({ isEnough }) =>
      isEnough &&
      css`
        color: #4caf50;
      `};
`;

export const CurrentAmount = styled.span`
  grid-area: current_amount;
  display: block;
  padding: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

export const ButtonArea = styled.span`
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
`;
