import React, { FC } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

// styles
import {
  Content,
  Title,
  FieldsContainer,
  SelectorContainer,
  OptionsWrapper,
} from "./Estrategias.styled";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

// components
import BackBtn from "../ui/BackBtn";
import ContinueBtn from "../ui/PrimaryBtn";
import Selector from "../ui/Selector";
import NumInput from "../ui/InputNum";

const Estrategias: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  const {
    aguaPotable,
    drenaje,
    tipoDrenaje,
    medioDeposicion,
    recoleccionBasura,
    frecuenciaBasura,
    parquesJardines,
    sistemaAlmacenamientoAgua,
    numCuartos,
    jardinCasa,
    tipoJardinEnCasa,
    accesoTv,
    numTvCasa,
    accesoRadio,
    numRadiosCasa,
    celular,
    celularIntegrante1,
    celularIntegrante2,
    celularIntegrante3,
    celularIntegrante4,
    celularIntegrante5,
    celularIntegrante6,
    celularIntegrante7,
    celularIntegrante8,
    celularIntegrante9,
    celularIntegrante10,
    celularIntegrante11,
    celularIntegrante12,
  } = useMasterForm();
  const formDispatcher = useMasterFormDistach();

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(match.url.replace("/servicios", "/actividades"));
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
      <Title>Conocimiento y percepción de estrategias</Title>
      <FieldsContainer>
        <SelectorContainer>
          <p>Agua Potable</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "aguaPotable")}
              selected={aguaPotable === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "aguaPotable")}
              selected={aguaPotable === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Drenaje</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "drenaje")}
              selected={drenaje === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "drenaje")}
              selected={drenaje === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Tipo de Drenaje</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "tipoDrenaje")}
              selected={tipoDrenaje === "Si"}
            >
              Entubado
            </Selector>
            <Selector
              onClick={handleSelector("No", "tipoDrenaje")}
              selected={tipoDrenaje === "No"}
            >
              Abierto
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Medio de deposición de Excretas</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Sanitario", "medioDeposicion")}
              selected={medioDeposicion === "Sanitario"}
            >
              Sanitario
            </Selector>
            <Selector
              onClick={handleSelector("Letrina", "medioDeposicion")}
              selected={medioDeposicion === "Letrina"}
            >
              Letrina
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Recolección de basura </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "recoleccionBasura")}
              selected={recoleccionBasura === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "recoleccionBasura")}
              selected={recoleccionBasura === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Frecuencia recolección de basura </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Diario", "frecuenciaBasura")}
              selected={frecuenciaBasura === "Diario"}
            >
              Diario
            </Selector>
            <Selector
              onClick={handleSelector("Cada 3er día", "frecuenciaBasura")}
              selected={frecuenciaBasura === "Cada 3er día"}
            >
              Cada 3er día
            </Selector>
            <Selector
              onClick={handleSelector("Una vez por semana", "frecuenciaBasura")}
              selected={frecuenciaBasura === "Una vez por semana"}
            >
              Una vez por semana
            </Selector>
            <Selector
              onClick={handleSelector(
                "Una vez cada quince días",
                "frecuenciaBasura"
              )}
              selected={frecuenciaBasura === "Una vez cada quince días"}
            >
              Una vez cada quince días
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Parques y jardines cercanos</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "parquesJardines")}
              selected={parquesJardines === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "parquesJardines")}
              selected={parquesJardines === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Frecuencia recolección de basura </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Tinaco", "sistemaAlmacenamientoAgua")}
              selected={sistemaAlmacenamientoAgua === "Tinaco"}
            >
              Tinaco
            </Selector>
            <Selector
              onClick={handleSelector("Piletas", "sistemaAlmacenamientoAgua")}
              selected={sistemaAlmacenamientoAgua === "Piletas"}
            >
              Piletas
            </Selector>
            <Selector
              onClick={handleSelector(
                "Tambos/botes",
                "sistemaAlmacenamientoAgua"
              )}
              selected={sistemaAlmacenamientoAgua === "Tambos/botes"}
            >
              Tambos/botes
            </Selector>
            <Selector
              onClick={handleSelector("Aljiber", "sistemaAlmacenamientoAgua")}
              selected={sistemaAlmacenamientoAgua === "Aljiber"}
            >
              Aljiber
            </Selector>
            <Selector
              onClick={handleSelector(
                "Pozo natural",
                "sistemaAlmacenamientoAgua"
              )}
              selected={sistemaAlmacenamientoAgua === "Pozo natural"}
            >
              Pozo natural
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Número de cuartos en su casa"
          value={numCuartos}
          id="numCuartos"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p>¿Cuenta con jardin en casa? </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "jardinCasa")}
              selected={jardinCasa === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "jardinCasa")}
              selected={jardinCasa === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿Cuenta con jardin en casa? </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Interior", "tipoJardinEnCasa")}
              selected={tipoJardinEnCasa === "Interior"}
            >
              Interior
            </Selector>
            <Selector
              onClick={handleSelector("Exterior", "tipoJardinEnCasa")}
              selected={tipoJardinEnCasa === "Exterior"}
            >
              Exterior
            </Selector>
            <Selector
              onClick={handleSelector("Ambos", "tipoJardinEnCasa")}
              selected={tipoJardinEnCasa === "Ambos"}
            >
              Ambos
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p> Acceso a televisión</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "accesoTv")}
              selected={accesoTv === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "accesoTv")}
              selected={accesoTv === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Número de televisiones en casa"
          value={numTvCasa}
          id="numTvCasa"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p> Acceso a la radio</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "accesoRadio")}
              selected={accesoRadio === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "accesoRadio")}
              selected={accesoRadio === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <NumInput
          labelTxt="Número de radios en casa"
          value={numRadiosCasa}
          id="numRadiosCasa"
          onChange={handleChangeJustNumber}
        />
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celular")}
              selected={celular === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celular")}
              selected={celular === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h2 style={{ margin: "25px 0" }}>Integrantes en casa</h2>
        <h3>Integrante 1</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante1")}
              selected={celularIntegrante1 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante1")}
              selected={celularIntegrante1 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 2</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante2")}
              selected={celularIntegrante2 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante2")}
              selected={celularIntegrante2 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 3</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante3")}
              selected={celularIntegrante3 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante3")}
              selected={celularIntegrante3 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 4</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante4")}
              selected={celularIntegrante4 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante4")}
              selected={celularIntegrante4 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 5</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante5")}
              selected={celularIntegrante5 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante5")}
              selected={celularIntegrante5 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 6</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante6")}
              selected={celularIntegrante6 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante6")}
              selected={celularIntegrante6 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 7</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante7")}
              selected={celularIntegrante7 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante7")}
              selected={celularIntegrante7 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 8</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante8")}
              selected={celularIntegrante8 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante8")}
              selected={celularIntegrante8 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 9</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante9")}
              selected={celularIntegrante9 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante9")}
              selected={celularIntegrante9 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 10</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante10")}
              selected={celularIntegrante10 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante10")}
              selected={celularIntegrante10 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 11</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante11")}
              selected={celularIntegrante11 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante11")}
              selected={celularIntegrante11 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <h3>Integrante 12</h3>
        <SelectorContainer>
          <p> Celular (Teléfono inteligente/smartphone)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "celularIntegrante12")}
              selected={celularIntegrante12 === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "celularIntegrante12")}
              selected={celularIntegrante12 === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>

        <ContinueBtn
          style={{ margin: "60px auto" }}
          disabled={
            !aguaPotable ||
            !drenaje ||
            !tipoDrenaje ||
            !medioDeposicion ||
            !recoleccionBasura ||
            !frecuenciaBasura ||
            !parquesJardines ||
            !sistemaAlmacenamientoAgua ||
            !numCuartos ||
            !jardinCasa ||
            !tipoJardinEnCasa ||
            !accesoTv ||
            !accesoRadio ||
            !celular
          }
          onClick={handleContinue}
        >
          Siguiente
        </ContinueBtn>
      </FieldsContainer>
    </Content>
  );
};

export default Estrategias;
