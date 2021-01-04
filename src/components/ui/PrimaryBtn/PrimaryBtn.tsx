import React, { FC } from "react";

// styles
import { Button } from "./PrimaryBtn.styled";

interface PrimaryBtnProps {
  slim?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
}

const PrimaryBtn: FC<PrimaryBtnProps> = ({
  children,
  disabled,
  onClick,
  slim,
  style,
}) => {
  return (
    <Button isDisabled={disabled} onClick={onClick} slim={slim} style={style}>
      {children}
    </Button>
  );
};

export default PrimaryBtn;
