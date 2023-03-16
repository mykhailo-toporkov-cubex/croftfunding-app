import styled from "@emotion/styled";
import { css } from "@mui/material"

export const Wrapper = styled.section<{isDisplay: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.3rem);
  visibility: visible;
  opacity: 1;
  transition: all 500ms;

  ${({ isDisplay }) =>
      !isDisplay &&
      css`
        visibility: hidden;
        opacity: 0;
      `};
`;

export const Form = styled.form`
  width: 30rem;
  background: white;
  border: 0.3rem solid #03a9f4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`