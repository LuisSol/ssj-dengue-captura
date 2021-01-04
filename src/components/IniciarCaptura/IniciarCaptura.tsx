import React, { FC } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

// styles
import { Content, Title, FieldsContainer } from "./iniciarCaptura.styled";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

// components
import StyledInput from "../ui/InputTxt";
import BackBtn from "../ui/BackBtn";
import ContinueBtn from "../ui/PrimaryBtn";

const IniciarCaptura: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  const { folio, fechaLevantamiento, zona, encuestador } = useMasterForm();
  const formDispatcher = useMasterFormDistach();

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(match.url.replace("/nueva", "/sociodemograficas"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    formDispatcher({
      type: "SET_VALUE",
      field: e.target.id,
      value: e.target.value,
    });
  };

  return (
    <Content>
      <BackBtn />
      <Title>Nueva Captura</Title>
      <FieldsContainer>
        <StyledInput
          labelTxt="Folio"
          value={folio}
          id="folio"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Zona"
          value={zona}
          id="zona"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Encuestador (ID y nombre)"
          value={encuestador}
          id="encuestador"
          onChange={handleChange}
        />
        <label style={{ marginTop: 30 }}>
          Fecha de levantamiento
          <br />
          <input
            type="date"
            style={{ marginTop: 10 }}
            value={fechaLevantamiento}
            id="fechaLevantamiento"
            onChange={handleChange}
          />
        </label>
        <ContinueBtn
          style={{ margin: "60px 0" }}
          disabled={!folio || !fechaLevantamiento || !zona || !encuestador}
          onClick={handleContinue}
        >
          Siguiente
        </ContinueBtn>
      </FieldsContainer>
    </Content>
  );
};

export default IniciarCaptura;
