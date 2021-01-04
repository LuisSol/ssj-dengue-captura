import React, { FC } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

// styles
import { Content, Title, FieldsContainer } from "./Sociodemograficas.styled";

// contexts

// components
import BackBtn from "../ui/BackBtn";
import ContinueBtn from "../ui/PrimaryBtn";

const Sociodemograficas: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(match.url.replace("/sociodemograficas", "/servicios"));
  };

  return (
    <Content>
      <BackBtn />
      <Title>Caracteristicas Sociodemograficas</Title>
      <FieldsContainer>
        <ContinueBtn
          style={{ margin: "60px 0" }}
          disabled={true}
          onClick={handleContinue}
        >
          Siguiente
        </ContinueBtn>
      </FieldsContainer>
    </Content>
  );
};

export default Sociodemograficas;
