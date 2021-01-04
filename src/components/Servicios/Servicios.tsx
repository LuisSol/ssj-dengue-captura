import React, { FC } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

// styles
import { Content, Title, FieldsContainer } from "./Servicios.styled";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

// components
import BackBtn from "../ui/BackBtn";
import ContinueBtn from "../ui/PrimaryBtn";
import StyledInput from "../ui/InputTxt";

const Servicios: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  const { nombre } = useMasterForm();
  const formDispatcher = useMasterFormDistach();

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(match.url.replace("/sociodemograficas", "/servicios"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formDispatcher({
      type: "SET_VALUE",
      field: e.target.id,
      value: e.target.value,
    });
  };

  return (
    <Content>
      <BackBtn />
      <Title>Servicios</Title>
      <FieldsContainer>
        <StyledInput
          labelTxt="Nombre"
          value={nombre}
          id="nombre"
          onChange={handleChange}
        />

        <ContinueBtn
          style={{ margin: "60px auto" }}
          disabled={true}
          onClick={handleContinue}
        >
          Siguiente
        </ContinueBtn>
      </FieldsContainer>
    </Content>
  );
};

export default Servicios;
