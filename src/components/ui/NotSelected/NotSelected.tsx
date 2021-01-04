import React, { FC } from "react";

// styles
import { Container } from "./NotSelected.styled";

const NotSelected: FC = ({ children }) => {
  return (
    <Container>
      <span />
      {children}
    </Container>
  );
};

export default NotSelected;
