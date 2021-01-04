import styled from "styled-components";

export const Content = styled.section`
  padding: 20px;
  position: relative;
  width: 100%;
  padding-bottom: 0;

  ${({ theme: { up, breakpoints } }) => up(breakpoints.maxDesk)} {
    max-width: 1220px;
  }
`;

export const Title = styled.h1`
  font-size: 29px;
  margin-left: 100px;
`;

export const FieldsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 320px;

  margin: 30px auto;
`;

export const SelectorContainer = styled.div`
  margin-top: 30px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
