import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

export const Content = styled.section`
  height: 100%;
  padding: 20px;
  position: relative;
  width: 100%;

  ${({ theme: { up, breakpoints } }) => up(breakpoints.maxDesk)} {
    max-width: 1220px;
  }
`;

export const Title = styled.h1`
  font-size: 29px;
`;

export const Total = styled.p`
  margin: 20px 0;
`;

export const FoliosWrapper = styled.section`
  display: flex;
`;

export const Encuesta = styled.h4``;
