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

export const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  margin-top: 20px;
`;

export const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 50%;
  margin-left: auto;

  svg {
    color: ${({ theme: { colors } }) => colors.aquaBlue};
    height: 20px;
    width: 20px;
  }
`;
