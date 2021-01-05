import React, { FC } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

// styles
import {
  Content,
  Title,
  FieldsContainer,
  SelectorContainer,
  OptionsWrapper,
} from "./Actividades.styled";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

// components
import BackBtn from "../ui/BackBtn";
import ContinueBtn from "../ui/PrimaryBtn";
import Selector from "../ui/Selector";
import NumInput from "../ui/InputNum";

const Actividades: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  const {
    verTvIntegrante1,
    verTvIntegrante2,
    verTvIntegrante3,
    verTvIntegrante4,
    verTvIntegrante5,
    verTvIntegrante6,
    verTvIntegrante7,
    verTvIntegrante8,
    verTvIntegrante9,
    verTvIntegrante10,
    verTvIntegrante11,
    verTvIntegrante12,
    radioIntegrante1,
    radioIntegrante2,
    radioIntegrante3,
    radioIntegrante4,
    radioIntegrante5,
    radioIntegrante6,
    radioIntegrante7,
    radioIntegrante8,
    radioIntegrante9,
    radioIntegrante10,
    radioIntegrante11,
    radioIntegrante12,
    usarCelIntegrante1,
    usarCelIntegrante2,
    usarCelIntegrante3,
    usarCelIntegrante4,
    usarCelIntegrante5,
    usarCelIntegrante6,
    usarCelIntegrante7,
    usarCelIntegrante8,
    usarCelIntegrante9,
    usarCelIntegrante10,
    usarCelIntegrante11,
    usarCelIntegrante12,
    lecturaIntegrante1,
    lecturaIntegrante2,
    lecturaIntegrante3,
    lecturaIntegrante4,
    lecturaIntegrante5,
    lecturaIntegrante6,
    lecturaIntegrante7,
    lecturaIntegrante8,
    lecturaIntegrante9,
    lecturaIntegrante10,
    lecturaIntegrante11,
    lecturaIntegrante12,
    fisicaIntegrante1,
    fisicaIntegrante2,
    fisicaIntegrante3,
    fisicaIntegrante4,
    fisicaIntegrante5,
    fisicaIntegrante6,
    fisicaIntegrante7,
    fisicaIntegrante8,
    fisicaIntegrante9,
    fisicaIntegrante10,
    fisicaIntegrante11,
    fisicaIntegrante12,
    aseoIntegrante1,
    aseoIntegrante2,
    aseoIntegrante3,
    aseoIntegrante4,
    aseoIntegrante5,
    aseoIntegrante6,
    aseoIntegrante7,
    aseoIntegrante8,
    aseoIntegrante9,
    aseoIntegrante10,
    aseoIntegrante11,
    aseoIntegrante12,
    opcionAseoIntegrante1,
    opcionAseoIntegrante2,
    opcionAseoIntegrante3,
    opcionAseoIntegrante4,
    opcionAseoIntegrante5,
    opcionAseoIntegrante6,
    opcionAseoIntegrante7,
    opcionAseoIntegrante8,
    opcionAseoIntegrante9,
    opcionAseoIntegrante10,
    opcionAseoIntegrante11,
    opcionAseoIntegrante12,
  } = useMasterForm();
  const formDispatcher = useMasterFormDistach();

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(match.url.replace("/actividades", "/estrategias"));
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
      <Title>Actividades en casa</Title>
      <FieldsContainer>
        <p>Horas que dedica al día a:</p>
        <h2 style={{ marginTop: 25 }}>Ver televisión</h2>
        <NumInput
          labelTxt="Integrante 1"
          value={verTvIntegrante1}
          id="verTvIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 2"
          value={verTvIntegrante2}
          id="verTvIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 3"
          value={verTvIntegrante3}
          id="verTvIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 4"
          value={verTvIntegrante4}
          id="verTvIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 5"
          value={verTvIntegrante5}
          id="verTvIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 6"
          value={verTvIntegrante6}
          id="verTvIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 7"
          value={verTvIntegrante7}
          id="verTvIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 8"
          value={verTvIntegrante8}
          id="verTvIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 9"
          value={verTvIntegrante9}
          id="verTvIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 10"
          value={verTvIntegrante10}
          id="verTvIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 11"
          value={verTvIntegrante11}
          id="verTvIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 12"
          value={verTvIntegrante12}
          id="verTvIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ marginTop: 25 }}>Escuchar el radio</h2>
        <NumInput
          labelTxt="Integrante 1"
          value={radioIntegrante1}
          id="radioIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 2"
          value={radioIntegrante2}
          id="radioIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 3"
          value={radioIntegrante3}
          id="radioIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 4"
          value={radioIntegrante4}
          id="radioIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 5"
          value={radioIntegrante5}
          id="radioIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 6"
          value={radioIntegrante6}
          id="radioIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 7"
          value={radioIntegrante7}
          id="radioIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 8"
          value={radioIntegrante8}
          id="radioIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 9"
          value={radioIntegrante9}
          id="radioIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 10"
          value={radioIntegrante10}
          id="radioIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 11"
          value={radioIntegrante11}
          id="radioIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 12"
          value={radioIntegrante12}
          id="radioIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ marginTop: 25 }}>Utilizar el celular</h2>
        <NumInput
          labelTxt="Integrante 1"
          value={usarCelIntegrante1}
          id="usarCelIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 2"
          value={usarCelIntegrante2}
          id="usarCelIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 3"
          value={usarCelIntegrante3}
          id="usarCelIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 4"
          value={usarCelIntegrante4}
          id="usarCelIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 5"
          value={usarCelIntegrante5}
          id="usarCelIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 6"
          value={usarCelIntegrante6}
          id="usarCelIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 7"
          value={usarCelIntegrante7}
          id="usarCelIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 8"
          value={usarCelIntegrante8}
          id="usarCelIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 9"
          value={usarCelIntegrante9}
          id="usarCelIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 10"
          value={usarCelIntegrante10}
          id="usarCelIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 11"
          value={usarCelIntegrante11}
          id="usarCelIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 12"
          value={usarCelIntegrante12}
          id="usarCelIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ marginTop: 25 }}>Lectura</h2>
        <NumInput
          labelTxt="Integrante 1"
          value={lecturaIntegrante1}
          id="lecturaIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 2"
          value={lecturaIntegrante2}
          id="lecturaIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 3"
          value={lecturaIntegrante3}
          id="lecturaIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 4"
          value={lecturaIntegrante4}
          id="lecturaIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 5"
          value={lecturaIntegrante5}
          id="lecturaIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 6"
          value={lecturaIntegrante6}
          id="lecturaIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 7"
          value={lecturaIntegrante7}
          id="lecturaIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 8"
          value={lecturaIntegrante8}
          id="lecturaIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 9"
          value={lecturaIntegrante9}
          id="lecturaIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 10"
          value={lecturaIntegrante10}
          id="lecturaIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 11"
          value={lecturaIntegrante11}
          id="lecturaIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 12"
          value={lecturaIntegrante12}
          id="lecturaIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ marginTop: 25 }}>Actividad física/deporte</h2>
        <NumInput
          labelTxt="Integrante 1"
          value={fisicaIntegrante1}
          id="fisicaIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 2"
          value={fisicaIntegrante2}
          id="fisicaIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 3"
          value={fisicaIntegrante3}
          id="fisicaIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 4"
          value={fisicaIntegrante4}
          id="fisicaIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 5"
          value={fisicaIntegrante5}
          id="fisicaIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 6"
          value={fisicaIntegrante6}
          id="fisicaIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 7"
          value={fisicaIntegrante7}
          id="fisicaIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 8"
          value={fisicaIntegrante8}
          id="fisicaIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 9"
          value={fisicaIntegrante9}
          id="fisicaIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 10"
          value={fisicaIntegrante10}
          id="fisicaIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 11"
          value={fisicaIntegrante11}
          id="fisicaIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 12"
          value={fisicaIntegrante12}
          id="fisicaIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ marginTop: 25 }}> Aseo de la casa</h2>
        <NumInput
          labelTxt="Integrante 1"
          value={aseoIntegrante1}
          id="aseoIntegrante1"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 2"
          value={aseoIntegrante2}
          id="aseoIntegrante2"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 3"
          value={aseoIntegrante3}
          id="aseoIntegrante3"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 4"
          value={aseoIntegrante4}
          id="aseoIntegrante4"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 5"
          value={aseoIntegrante5}
          id="aseoIntegrante5"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 6"
          value={aseoIntegrante6}
          id="aseoIntegrante6"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 7"
          value={aseoIntegrante7}
          id="aseoIntegrante7"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 8"
          value={aseoIntegrante8}
          id="aseoIntegrante8"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 9"
          value={aseoIntegrante9}
          id="aseoIntegrante9"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 10"
          value={aseoIntegrante10}
          id="aseoIntegrante10"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 11"
          value={aseoIntegrante11}
          id="aseoIntegrante11"
          onChange={handleChangeJustNumber}
        />
        <NumInput
          labelTxt="Integrante 12"
          value={aseoIntegrante12}
          id="aseoIntegrante12"
          onChange={handleChangeJustNumber}
        />
        <h2 style={{ marginTop: 25 }}>
          Si no se realiza diariamente ¿Qué tan seguido realiza en aseo en su
          casa?
        </h2>
        <SelectorContainer>
          <p>Integrante 1</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante1"
              )}
              selected={opcionAseoIntegrante1 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante1"
              )}
              selected={opcionAseoIntegrante1 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante1"
              )}
              selected={opcionAseoIntegrante1 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante1"
              )}
              selected={opcionAseoIntegrante1 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante1")}
              selected={opcionAseoIntegrante1 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 2</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante2"
              )}
              selected={opcionAseoIntegrante2 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante2"
              )}
              selected={opcionAseoIntegrante2 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante2"
              )}
              selected={opcionAseoIntegrante2 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante2"
              )}
              selected={opcionAseoIntegrante2 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante2")}
              selected={opcionAseoIntegrante2 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 3</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante3"
              )}
              selected={opcionAseoIntegrante3 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante3"
              )}
              selected={opcionAseoIntegrante3 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante3"
              )}
              selected={opcionAseoIntegrante3 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante3"
              )}
              selected={opcionAseoIntegrante3 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante3")}
              selected={opcionAseoIntegrante3 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 4</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante4"
              )}
              selected={opcionAseoIntegrante4 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante4"
              )}
              selected={opcionAseoIntegrante4 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante4"
              )}
              selected={opcionAseoIntegrante4 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante4"
              )}
              selected={opcionAseoIntegrante4 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante4")}
              selected={opcionAseoIntegrante4 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 5</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante5"
              )}
              selected={opcionAseoIntegrante5 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante5"
              )}
              selected={opcionAseoIntegrante5 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante5"
              )}
              selected={opcionAseoIntegrante5 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante5"
              )}
              selected={opcionAseoIntegrante5 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante5")}
              selected={opcionAseoIntegrante5 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 6</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante6"
              )}
              selected={opcionAseoIntegrante6 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante6"
              )}
              selected={opcionAseoIntegrante6 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante6"
              )}
              selected={opcionAseoIntegrante6 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante6"
              )}
              selected={opcionAseoIntegrante6 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante6")}
              selected={opcionAseoIntegrante6 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 7</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante7"
              )}
              selected={opcionAseoIntegrante7 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante7"
              )}
              selected={opcionAseoIntegrante7 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante7"
              )}
              selected={opcionAseoIntegrante7 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante7"
              )}
              selected={opcionAseoIntegrante7 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante7")}
              selected={opcionAseoIntegrante7 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 8</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante8"
              )}
              selected={opcionAseoIntegrante8 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante8"
              )}
              selected={opcionAseoIntegrante8 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante8"
              )}
              selected={opcionAseoIntegrante8 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante8"
              )}
              selected={opcionAseoIntegrante8 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante8")}
              selected={opcionAseoIntegrante8 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 9</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante9"
              )}
              selected={opcionAseoIntegrante9 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante9"
              )}
              selected={opcionAseoIntegrante9 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante9"
              )}
              selected={opcionAseoIntegrante9 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante9"
              )}
              selected={opcionAseoIntegrante9 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante9")}
              selected={opcionAseoIntegrante9 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 10</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante10"
              )}
              selected={opcionAseoIntegrante10 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante10"
              )}
              selected={opcionAseoIntegrante10 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante10"
              )}
              selected={opcionAseoIntegrante10 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante10"
              )}
              selected={opcionAseoIntegrante10 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante10")}
              selected={opcionAseoIntegrante10 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 11</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante11"
              )}
              selected={opcionAseoIntegrante11 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante11"
              )}
              selected={opcionAseoIntegrante11 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante11"
              )}
              selected={opcionAseoIntegrante11 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante11"
              )}
              selected={opcionAseoIntegrante11 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante11")}
              selected={opcionAseoIntegrante11 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Integrante 12</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector(
                "Cada tercer día",
                "opcionAseoIntegrante12"
              )}
              selected={opcionAseoIntegrante12 === "Cada tercer día"}
            >
              Cada tercer día
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez a la semana",
                "opcionAseoIntegrante12"
              )}
              selected={opcionAseoIntegrante12 === "Una vez a la semana"}
            >
              Una vez a la semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "opcionAseoIntegrante12"
              )}
              selected={opcionAseoIntegrante12 === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez al mes",
                "opcionAseoIntegrante12"
              )}
              selected={opcionAseoIntegrante12 === "Una vez al mes"}
            >
              Una vez al mes
            </Selector>
            <Selector
              onClick={handleSelector("Nunca", "opcionAseoIntegrante12")}
              selected={opcionAseoIntegrante12 === "Nunca"}
            >
              Nunca
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>

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

export default Actividades;
