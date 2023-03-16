import styled from "@emotion/styled";
import Link from "next/link";

export const PageWrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainText = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #2979ff;
`;
