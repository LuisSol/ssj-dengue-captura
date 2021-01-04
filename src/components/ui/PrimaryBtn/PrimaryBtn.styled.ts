import styled from "styled-components";

interface ButtonProps {
  isDisabled: boolean | undefined;
  slim: boolean | undefined;
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background: ${({ theme: { colors }, isDisabled }) =>
    isDisabled ? colors.gray2 : colors.aquaBlue};
  border-radius: 30px;
  border: 0;
  color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: ${({ slim }) => (slim ? "45px" : "55px")};
  justify-content: center;
  margin: 20px 0;
  opacity: ${({ isDisabled }) => (isDisabled ? ".4" : "1")};
  padding: 0 30px;
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "all")};
  width: ${({ slim }) => (slim ? "auto" : "253px")};
  transition: background-color 200ms ease;

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ theme: { colors } }) => colors.darkAquaBlue};
  }
`;
