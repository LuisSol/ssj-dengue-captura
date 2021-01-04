import React, { FC } from "react";

// styled
import { Container } from "./MainContainer.styled";

const MainContainer: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
