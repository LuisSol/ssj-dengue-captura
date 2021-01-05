import React, { FC } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

// styles
import {
  Content,
  Title,
  FieldsContainer,
  SelectorContainer,
  OptionsWrapper,
} from "./Sociodemograficas.styled";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

// components
import BackBtn from "../ui/BackBtn";
import ContinueBtn from "../ui/PrimaryBtn";
import StyledInput from "../ui/InputTxt";
import Selector from "../ui/Selector";
import NumInput from "../ui/InputNum";

const Sociodemograficas: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  const {
    nombre,
    edad,
    idEncuestado,
    sexo,
    religion,
    estadoCivil,
    escolaridad,
    ocupacion,
    domicilio,
    numIntegrantes,
    idIntegrante1,
    idIntegrante2,
    idIntegrante10,
    idIntegrante11,
    idIntegrante12,
    idIntegrante3,
    idIntegrante4,
    idIntegrante5,
    idIntegrante7,
    idIntegrante8,
    idIntegrante9,
    edadIntegrante1,
    edadIntegrante10,
    edadIntegrante11,
    edadIntegrante12,
    edadIntegrante2,
    edadIntegrante3,
    edadIntegrante4,
    edadIntegrante5,
    edadIntegrante6,
    edadIntegrante7,
    edadIntegrante8,
    edadIntegrante9,
    escolaridadIntegrante1,
    escolaridadIntegrante10,
    escolaridadIntegrante11,
    escolaridadIntegrante12,
    escolaridadIntegrante2,
    escolaridadIntegrante3,
    escolaridadIntegrante4,
    escolaridadIntegrante5,
    escolaridadIntegrante7,
    escolaridadIntegrante8,
    personasEnCasa4horasAlDia,
  } = useMasterForm();
  const formDispatcher = useMasterFormDistach();

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(match.url.replace("/sociodemograficas", "/servicios"));
  };

  const handleSelector = (value: string, field: string) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    formDispatcher({
      type: "SET_VALUE",
      field,
      value,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formDispatcher({
      type: "SET_VALUE",
      field: e.target.id,
      value: e.target.value,
    });
  };

  const handleChangeJustNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastChar = value.charAt(value.length - 1);

    if (!value || /[0-9]/gi.test(lastChar)) {
      formDispatcher({
        type: "SET_VALUE",
        field: e.target.id,
        value,
      });
    }
  };

  return (
    <Content>
      <BackBtn />
      <Title>Caracteristicas Sociodemograficas</Title>
      <FieldsContainer>
        <StyledInput
          labelTxt="Nombre"
          value={nombre}
          id="nombre"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>Identificación del integrante</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idEncuestado")}
              selected={idEncuestado === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idEncuestado")}
              selected={idEncuestado === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idEncuestado")}
              selected={idEncuestado === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idEncuestado")}
              selected={idEncuestado === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idEncuestado")}
              selected={idEncuestado === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idEncuestado")}
              selected={idEncuestado === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idEncuestado")}
              selected={idEncuestado === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edad}
          id="edad"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Sexo</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "sexo")}
              selected={sexo === "1"}
            >
              Femenino
            </Selector>
            <Selector
              onClick={handleSelector("2", "sexo")}
              selected={sexo === "2"}
            >
              Masculino
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Religión</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "religion")}
              selected={religion === "1"}
            >
              Catolica
            </Selector>
            <Selector
              onClick={handleSelector("2", "religion")}
              selected={religion === "2"}
            >
              La Luz del Mundo
            </Selector>
            <Selector
              onClick={handleSelector("3", "religion")}
              selected={religion === "3"}
            >
              Testigos de Jeohová
            </Selector>
            <Selector
              onClick={handleSelector("4", "religion")}
              selected={religion === "4"}
            >
              Protestante
            </Selector>
            <Selector
              onClick={handleSelector("5", "religion")}
              selected={religion === "5"}
            >
              Judío
            </Selector>
            <Selector
              onClick={handleSelector("6", "religion")}
              selected={religion === "6"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Estado Civil</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "estadoCivil")}
              selected={estadoCivil === "1"}
            >
              Soltero
            </Selector>
            <Selector
              onClick={handleSelector("2", "estadoCivil")}
              selected={estadoCivil === "2"}
            >
              Casado
            </Selector>
            <Selector
              onClick={handleSelector("3", "estadoCivil")}
              selected={estadoCivil === "3"}
            >
              Viudo(a)
            </Selector>
            <Selector
              onClick={handleSelector("4", "estadoCivil")}
              selected={estadoCivil === "4"}
            >
              Divorciado (a)
            </Selector>
            <Selector
              onClick={handleSelector("5", "estadoCivil")}
              selected={estadoCivil === "5"}
            >
              Unión libre
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridad")}
              selected={escolaridad === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridad")}
              selected={escolaridad === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridad")}
              selected={escolaridad === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridad")}
              selected={escolaridad === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridad")}
              selected={escolaridad === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridad")}
              selected={escolaridad === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridad")}
              selected={escolaridad === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Ocupación/empleo"
          value={ocupacion}
          id="ocupacion"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Domicilio"
          value={domicilio}
          id="domicilio"
          onChange={handleChange}
        />
        <NumInput
          labelTxt="Número de integrantes de esta casa"
          value={numIntegrantes}
          id="numIntegrantes"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ margin: "25px 0" }}>Integrantes en casa</h2>
        <h3>Integrante 1</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante1")}
              selected={idIntegrante1 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante1")}
              selected={idIntegrante1 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante1")}
              selected={idIntegrante1 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante1")}
              selected={idIntegrante1 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante1")}
              selected={idIntegrante1 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante1")}
              selected={idIntegrante1 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante1")}
              selected={idIntegrante1 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante1}
          id="edadIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante1")}
              selected={escolaridadIntegrante1 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 2</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante2")}
              selected={idIntegrante2 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante2")}
              selected={idIntegrante2 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante2")}
              selected={idIntegrante2 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante2")}
              selected={idIntegrante2 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante2")}
              selected={idIntegrante2 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante2")}
              selected={idIntegrante2 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante2")}
              selected={idIntegrante2 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante2}
          id="edadIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante2")}
              selected={escolaridadIntegrante2 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 3</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante3")}
              selected={idIntegrante3 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante3")}
              selected={idIntegrante3 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante3")}
              selected={idIntegrante3 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante3")}
              selected={idIntegrante3 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante3")}
              selected={idIntegrante3 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante3")}
              selected={idIntegrante3 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante3")}
              selected={idIntegrante3 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante3}
          id="edadIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante3")}
              selected={escolaridadIntegrante3 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 4</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante4")}
              selected={idIntegrante4 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante4")}
              selected={idIntegrante4 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante4")}
              selected={idIntegrante4 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante4")}
              selected={idIntegrante4 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante4")}
              selected={idIntegrante4 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante4")}
              selected={idIntegrante4 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante4")}
              selected={idIntegrante4 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante4}
          id="edadIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante4")}
              selected={escolaridadIntegrante4 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 5</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante5")}
              selected={idIntegrante5 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante5")}
              selected={idIntegrante5 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante5")}
              selected={idIntegrante5 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante5")}
              selected={idIntegrante5 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante5")}
              selected={idIntegrante5 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante5")}
              selected={idIntegrante5 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante5")}
              selected={idIntegrante5 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante5}
          id="edadIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante5")}
              selected={escolaridadIntegrante5 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 6</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante7")}
              selected={idIntegrante7 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante7")}
              selected={idIntegrante7 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante7")}
              selected={idIntegrante7 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante7")}
              selected={idIntegrante7 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante7")}
              selected={idIntegrante7 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante7")}
              selected={idIntegrante7 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante7")}
              selected={idIntegrante7 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante6}
          id="edadIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 7</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante7")}
              selected={idIntegrante7 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante7")}
              selected={idIntegrante7 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante7")}
              selected={idIntegrante7 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante7")}
              selected={idIntegrante7 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante7")}
              selected={idIntegrante7 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante7")}
              selected={idIntegrante7 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante7")}
              selected={idIntegrante7 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante7}
          id="edadIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante7")}
              selected={escolaridadIntegrante7 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 8</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante8")}
              selected={idIntegrante8 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante8")}
              selected={idIntegrante8 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante8")}
              selected={idIntegrante8 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante8")}
              selected={idIntegrante8 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante8")}
              selected={idIntegrante8 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante8")}
              selected={idIntegrante8 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante8")}
              selected={idIntegrante8 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante8}
          id="edadIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante8")}
              selected={escolaridadIntegrante8 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 9</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante9")}
              selected={idIntegrante9 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante9")}
              selected={idIntegrante9 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante9")}
              selected={idIntegrante9 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante9")}
              selected={idIntegrante9 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante9")}
              selected={idIntegrante9 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante9")}
              selected={idIntegrante9 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante9")}
              selected={idIntegrante9 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante9}
          id="edadIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 10</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante10")}
              selected={idIntegrante10 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante10")}
              selected={idIntegrante10 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante10")}
              selected={idIntegrante10 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante10")}
              selected={idIntegrante10 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante10")}
              selected={idIntegrante10 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante10")}
              selected={idIntegrante10 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante10")}
              selected={idIntegrante10 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante10}
          id="edadIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante10")}
              selected={escolaridadIntegrante10 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 11</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante11")}
              selected={idIntegrante11 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante11")}
              selected={idIntegrante11 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante11")}
              selected={idIntegrante11 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante11")}
              selected={idIntegrante11 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante11")}
              selected={idIntegrante11 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante11")}
              selected={idIntegrante11 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante11")}
              selected={idIntegrante11 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante11}
          id="edadIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante11")}
              selected={escolaridadIntegrante11 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 12</h3>
        <SelectorContainer>
          <p>Identificación</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "idIntegrante12")}
              selected={idIntegrante12 === "1"}
            >
              Abuelo
            </Selector>
            <Selector
              onClick={handleSelector("2", "idIntegrante12")}
              selected={idIntegrante12 === "2"}
            >
              Abuela
            </Selector>
            <Selector
              onClick={handleSelector("3", "idIntegrante12")}
              selected={idIntegrante12 === "3"}
            >
              Madre
            </Selector>
            <Selector
              onClick={handleSelector("4", "idIntegrante12")}
              selected={idIntegrante12 === "4"}
            >
              Padre
            </Selector>
            <Selector
              onClick={handleSelector("5", "idIntegrante12")}
              selected={idIntegrante12 === "5"}
            >
              Hijo
            </Selector>
            <Selector
              onClick={handleSelector("6", "idIntegrante12")}
              selected={idIntegrante12 === "6"}
            >
              Hija
            </Selector>
            <Selector
              onClick={handleSelector("7", "idIntegrante12")}
              selected={idIntegrante12 === "7"}
            >
              Otro
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Edad"
          value={edadIntegrante12}
          id="edadIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>Escolaridad</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "1"}
            >
              Ninguna
            </Selector>
            <Selector
              onClick={handleSelector("2", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "2"}
            >
              Primaria
            </Selector>
            <Selector
              onClick={handleSelector("3", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "3"}
            >
              Secundaria
            </Selector>
            <Selector
              onClick={handleSelector("4", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "4"}
            >
              Prepa
            </Selector>
            <Selector
              onClick={handleSelector("5", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "5"}
            >
              Licenciatura
            </Selector>
            <Selector
              onClick={handleSelector("6", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "6"}
            >
              Universidad
            </Selector>
            <Selector
              onClick={handleSelector("7", "escolaridadIntegrante12")}
              selected={escolaridadIntegrante12 === "7"}
            >
              Postgrado
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="¿Cuántas personas se encuentran en casa  más de 4 horas al día?"
          value={personasEnCasa4horasAlDia}
          id="personasEnCasa4horasAlDia"
          onChange={handleChangeJustNumber}
        />

        <ContinueBtn
          style={{ margin: "60px auto" }}
          disabled={false}
          onClick={handleContinue}
        >
          Siguiente
        </ContinueBtn>
      </FieldsContainer>
    </Content>
  );
};

export default Sociodemograficas;
