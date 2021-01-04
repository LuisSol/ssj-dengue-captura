import styled from "styled-components";

export const Button = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.aquaBlue};
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  position: absolute;
  left: 45px;
  top: 20px;

  svg {
    color: ${({ theme: { colors } }) => colors.aquaBlue};
    height: 20px;
    width: 20px;
  }
`;
