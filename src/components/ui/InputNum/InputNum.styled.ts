import styled from "styled-components";

interface StyledLabelProps {
  first?: boolean;
}

interface InputContainerProps {
  validated: boolean;
  valid: boolean | undefined;
}

interface StyledInputProps {
  invalid: boolean | undefined;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ theme: { colors } }) => colors.gray};
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 28px;
  position: relative;
  width: 95%;

  ${({ theme: { up, breakpoints } }) => up(breakpoints.desktop)} {
    margin-top: ${({ first }) => (first ? "0" : "28px")};
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
  height: 35px;
  padding-top: 7px;
  position: relative;
`;

export const StyledInput = styled.input<StyledInputProps>`
  border: 0;
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 20px;
  font-weight: 600;
  height: 23px;
  width: 88%;

  &:focus {
    outline: none;
  }
  &:disabled {
    background: transparent;
  }
`;
