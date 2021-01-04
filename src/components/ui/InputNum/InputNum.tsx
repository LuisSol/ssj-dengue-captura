import React, { FC } from "react";

// styles
import { StyledLabel, InputContainer, StyledInput } from "./InputNum.styled";

interface NumDataInputProps {
  labelTxt: string;
  first?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  id: string;
  disabled?: boolean;
}

const NumDataInput: FC<NumDataInputProps> = ({
  labelTxt,
  first,
  value,
  onChange,
  onBlur,
  id,
  disabled,
}) => {
  return (
    <StyledLabel first={first}>
      {labelTxt}
      <InputContainer validated={false} valid={false}>
        <StyledInput
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          maxLength={50}
          invalid={false}
          disabled={disabled}
        />
      </InputContainer>
    </StyledLabel>
  );
};

export default NumDataInput;
