import React, { FC } from "react";

// styled
import { Container } from "./Selector.styled";

// components
import NotSelected from "../NotSelected";
import Selected from "../PrimaryBtn";

interface SelectorTabProps {
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Selector: FC<SelectorTabProps> = ({ selected, children, onClick }) => {
  return (
    <Container onClick={onClick}>
      {selected ? (
        <Selected slim>{children}</Selected>
      ) : (
        <NotSelected>{children}</NotSelected>
      )}
    </Container>
  );
};

export default Selector;
