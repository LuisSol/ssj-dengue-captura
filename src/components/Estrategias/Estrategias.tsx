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
import StyledInput from "../ui/InputTxt";

// utils
import { flasher } from "../../utils/Flasher";
import { db } from "../../utils/Firebase";

const Estrategias: FC<RouteComponentProps> = ({ match }) => {
  const history = useHistory();
  const form = useMasterForm();
  const {
    conoceEstrategias,
    detalleEstrategias,
    conoceEnfermedades,
    detalleEnfermedades,
    conoceSaludable,
    conoceDengue,
    conoceTransmisionDengue,
    detalleTransmisionDengue,
    conoceRepMosquitos,
    esconditeMosquitos,
    denguePrevenir,
    detallePrevenirDengue,
    conoceDescacha,
    conoceProgramaPatio,
    detallePatioLimpio,
    conoceEstrategiasDengue,
    comoSupoEstrategiasDengue,
    esClaroMensaje,
    queTransmiteMensaje,
    queSignificaMensaje,
    imagenAtencion,
    porqueImagen,
    significaLava,
    significaTapa,
    significaVoltea,
    significaTira,
    conoceTomas,
    seIdentifica,
    algunMiembroIdentifica,
    porqueIdentifica,
    mensajeInteres,
    haHechoActividad,
    detalleActividad,
    conoceAguasDengue,
    comoConocioAguasDengue,
    queSignificaAguasDengue,
    conoceAppDengue,
    comoConoceApp,
    utilizaApp,
    utilApp,
    porqueUtilApp,
    algunMiembroUtilizaApp,
    importantesApp,
    detalleImportantesApp,
    medioMensajes,
    detalleMedio,
  } = form;
  const formDispatcher = useMasterFormDistach();

  const handleContinue = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      db.collection("2020").doc(form.folio).set(form);
      flasher("Encuesta guardada satisfactoriamente", "success");
      formDispatcher({ type: "RESET_FORM" });
      history.push("/");
    } catch (error) {
      console.error(error);
      flasher("Algo salió mal intentalo de nuevo", "error");
    }
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

  return (
    <Content>
      <BackBtn />
      <Title>Conocimiento y percepción de estrategias</Title>
      <FieldsContainer>
        <SelectorContainer>
          <p>
            ¿Conoce estrategias que le invitan a limpiar su medio para prevenir
            enfermedades?
          </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceEstrategias")}
              selected={conoceEstrategias === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceEstrategias")}
              selected={conoceEstrategias === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si la respuesta  es si, mencione cuales"
          value={detalleEstrategias}
          id="detalleEstrategias"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Sabe que enfermedades afectan mas en su comunidad?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceEnfermedades")}
              selected={conoceEnfermedades === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceEnfermedades")}
              selected={conoceEnfermedades === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si la respuesta es si, ¿Puede mencionarlas?"
          value={detalleEnfermedades}
          id="detalleEnfermedades"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Sabes que es un entorno saludable?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceSaludable")}
              selected={conoceSaludable === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceSaludable")}
              selected={conoceSaludable === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿Sabe qué es el dengue?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceDengue")}
              selected={conoceDengue === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceDengue")}
              selected={conoceDengue === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿Conoce cómo se trasmite el dengue?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceTransmisionDengue")}
              selected={conoceTransmisionDengue === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceTransmisionDengue")}
              selected={conoceTransmisionDengue === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si la respuesta es si, ¿Cómo?"
          value={detalleTransmisionDengue}
          id="detalleTransmisionDengue"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Conoce cómo se reproducen los mosquitos?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceRepMosquitos")}
              selected={conoceRepMosquitos === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceRepMosquitos")}
              selected={conoceRepMosquitos === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿En qué lugares se esconden los mosquitos?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Llantas", "esconditeMosquitos")}
              selected={esconditeMosquitos === "Llantas"}
            >
              Llantas
            </Selector>
            <Selector
              onClick={handleSelector("Plantas", "esconditeMosquitos")}
              selected={esconditeMosquitos === "Plantas"}
            >
              Plantas
            </Selector>
            <Selector
              onClick={handleSelector(
                "Depositos de Agua",
                "esconditeMosquitos"
              )}
              selected={esconditeMosquitos === "Depositos de Agua"}
            >
              Depositos de Agua
            </Selector>
            <Selector
              onClick={handleSelector("Lugares oscuros", "esconditeMosquitos")}
              selected={esconditeMosquitos === "Lugares oscuros"}
            >
              Lugares oscuros
            </Selector>
            <Selector
              onClick={handleSelector("En pozos", "esconditeMosquitos")}
              selected={esconditeMosquitos === "En pozos"}
            >
              En pozos
            </Selector>
            <Selector
              onClick={handleSelector("Basura", "esconditeMosquitos")}
              selected={esconditeMosquitos === "Basura"}
            >
              Basura
            </Selector>
            <Selector
              onClick={handleSelector("Otros", "esconditeMosquitos")}
              selected={esconditeMosquitos === "Otros"}
            >
              Otros
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿El dengue se puede prevenir?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "denguePrevenir")}
              selected={denguePrevenir === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "denguePrevenir")}
              selected={denguePrevenir === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si la respuesta es sí, ¿Cómo?"
          value={detallePrevenirDengue}
          id="detallePrevenirDengue"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Sabe que es una descacharrización?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceDescacha")}
              selected={conoceDescacha === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceDescacha")}
              selected={conoceDescacha === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿Conoce que es el programa Patio Limpio?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceProgramaPatio")}
              selected={conoceProgramaPatio === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceProgramaPatio")}
              selected={conoceProgramaPatio === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si la respuesta es sí, ¿Cómo?"
          value={detallePatioLimpio}
          id="detallePatioLimpio"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>
            Contra el dengue, ¿Conoce la estrategía Lava, Tapa, Voltea y Tira?
          </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceEstrategiasDengue")}
              selected={conoceEstrategiasDengue === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceEstrategiasDengue")}
              selected={conoceEstrategiasDengue === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Si al respuesta es sí ¿Cómo supo de ella?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Tripticos", "comoSupoEstrategiasDengue")}
              selected={comoSupoEstrategiasDengue === "Tripticos"}
            >
              Tripticos
            </Selector>
            <Selector
              onClick={handleSelector("Radio", "comoSupoEstrategiasDengue")}
              selected={comoSupoEstrategiasDengue === "Radio"}
            >
              Radio
            </Selector>
            <Selector
              onClick={handleSelector(
                "Televisíón",
                "comoSupoEstrategiasDengue"
              )}
              selected={comoSupoEstrategiasDengue === "Televisíón"}
            >
              Televisíón
            </Selector>
            <Selector
              onClick={handleSelector(
                "Redes sociales",
                "comoSupoEstrategiasDengue"
              )}
              selected={comoSupoEstrategiasDengue === "Redes sociales"}
            >
              Redes sociales
            </Selector>
            <Selector
              onClick={handleSelector(
                "Personal de salud",
                "comoSupoEstrategiasDengue"
              )}
              selected={comoSupoEstrategiasDengue === "Personal de salud"}
            >
              Personal de salud
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>
            El mensaje de la estrategia le parece claro (mostrar las imágenes)
          </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "esClaroMensaje")}
              selected={esClaroMensaje === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "esClaroMensaje")}
              selected={esClaroMensaje === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="¿Qué le trasmite? "
          value={queTransmiteMensaje}
          id="queTransmiteMensaje"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Desde su punto de vista ¿Qué significa?"
          value={queSignificaMensaje}
          id="queSignificaMensaje"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt=" ¿Qué imagén y/o palabra llama más su atención?"
          value={imagenAtencion}
          id="imagenAtencion"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt=" ¿Por qué?"
          value={porqueImagen}
          id="porqueImagen"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Para usted ¿Qué significa Lava?"
          value={significaLava}
          id="significaLava"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Para usted ¿Qué significa Tapa?"
          value={significaTapa}
          id="significaTapa"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Para usted ¿Qué significa Voltea?"
          value={significaVoltea}
          id="significaVoltea"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="Para usted ¿Qué significa Tira?"
          value={significaTira}
          id="significaTira"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Conoce a Tomás? (marioneta)</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceTomas")}
              selected={conoceTomas === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceTomas")}
              selected={conoceTomas === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si la respuesta es si, ¿Se siente identificado con él? Y ¿Por qué?"
          value={seIdentifica}
          id="seIdentifica"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>Algún miembro de su familia ¿Se siente identificado con Tomás?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "1"}
            >
              1
            </Selector>
            <Selector
              onClick={handleSelector("2", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "2"}
            >
              2
            </Selector>
            <Selector
              onClick={handleSelector("3", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "3"}
            >
              3
            </Selector>
            <Selector
              onClick={handleSelector("4", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "4"}
            >
              4
            </Selector>
            <Selector
              onClick={handleSelector("5", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "5"}
            >
              5
            </Selector>
            <Selector
              onClick={handleSelector("6", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "6"}
            >
              6
            </Selector>
            <Selector
              onClick={handleSelector("7", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "7"}
            >
              7
            </Selector>
            <Selector
              onClick={handleSelector("8", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "8"}
            >
              8
            </Selector>
            <Selector
              onClick={handleSelector("9", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "9"}
            >
              9
            </Selector>
            <Selector
              onClick={handleSelector("10", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "10"}
            >
              10
            </Selector>
            <Selector
              onClick={handleSelector("11", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "11"}
            >
              11
            </Selector>
            <Selector
              onClick={handleSelector("12", "algunMiembroIdentifica")}
              selected={algunMiembroIdentifica === "12"}
            >
              12
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt=" ¿Por qué cree que eso sucede?"
          value={porqueIdentifica}
          id="porqueIdentifica"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿El mensaje le despierta intéres por realizar lo que trasmite?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "mensajeInteres")}
              selected={mensajeInteres === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "mensajeInteres")}
              selected={mensajeInteres === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>
            A partir de que conoce el mensaje ¿Ha hecho algúna actividad de las
            que se plantean?
          </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "haHechoActividad")}
              selected={haHechoActividad === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "haHechoActividad")}
              selected={haHechoActividad === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="  Si la respuesta es sí ¿Cuál?"
          value={detalleActividad}
          id="detalleActividad"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Conoce la estrategía Aguas el dengue esta en casa?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceAguasDengue")}
              selected={conoceAguasDengue === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceAguasDengue")}
              selected={conoceAguasDengue === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿Cómo la conoció?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Tripticos", "comoConocioAguasDengue")}
              selected={comoConocioAguasDengue === "Tripticos"}
            >
              Tripticos
            </Selector>
            <Selector
              onClick={handleSelector("Radio", "comoConocioAguasDengue")}
              selected={comoConocioAguasDengue === "Radio"}
            >
              Radio
            </Selector>
            <Selector
              onClick={handleSelector("Televisíón", "comoConocioAguasDengue")}
              selected={comoConocioAguasDengue === "Televisíón"}
            >
              Televisíón
            </Selector>
            <Selector
              onClick={handleSelector(
                "Redes sociales",
                "comoConocioAguasDengue"
              )}
              selected={comoConocioAguasDengue === "Redes sociales"}
            >
              Redes sociales
            </Selector>
            <Selector
              onClick={handleSelector(
                "Personal de salud",
                "comoConocioAguasDengue"
              )}
              selected={comoConocioAguasDengue === "Personal de salud"}
            >
              Personal de salud
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="Si es así ¿Qué significa para usted?"
          value={queSignificaAguasDengue}
          id="queSignificaAguasDengue"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>¿Conoce la Aplicación para celular "Sin dengue" ?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "conoceAppDengue")}
              selected={conoceAppDengue === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "conoceAppDengue")}
              selected={conoceAppDengue === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Si la respuesta es sí ¿Cómo la conoció?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Tripticos", "comoConoceApp")}
              selected={comoConoceApp === "Tripticos"}
            >
              Tripticos
            </Selector>
            <Selector
              onClick={handleSelector("Radio", "comoConoceApp")}
              selected={comoConoceApp === "Radio"}
            >
              Radio
            </Selector>
            <Selector
              onClick={handleSelector("Televisíón", "comoConoceApp")}
              selected={comoConoceApp === "Televisíón"}
            >
              Televisíón
            </Selector>
            <Selector
              onClick={handleSelector("Redes sociales", "comoConoceApp")}
              selected={comoConoceApp === "Redes sociales"}
            >
              Redes sociales
            </Selector>
            <Selector
              onClick={handleSelector("Personal de salud", "comoConoceApp")}
              selected={comoConoceApp === "Personal de salud"}
            >
              Personal de salud
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>Si la conoce ¿La ha utilizado?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "utilizaApp")}
              selected={utilizaApp === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "utilizaApp")}
              selected={utilizaApp === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <SelectorContainer>
          <p>¿Le parece últil?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Si", "utilApp")}
              selected={utilApp === "Si"}
            >
              Si
            </Selector>
            <Selector
              onClick={handleSelector("No", "utilApp")}
              selected={utilApp === "No"}
            >
              No
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="¿Por qué?"
          value={porqueUtilApp}
          id="porqueUtilApp"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>Sabe si algún miembro de su familia ¿La ha utilizado?</p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("1", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "1"}
            >
              1
            </Selector>
            <Selector
              onClick={handleSelector("2", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "2"}
            >
              2
            </Selector>
            <Selector
              onClick={handleSelector("3", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "3"}
            >
              3
            </Selector>
            <Selector
              onClick={handleSelector("4", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "4"}
            >
              4
            </Selector>
            <Selector
              onClick={handleSelector("5", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "5"}
            >
              5
            </Selector>
            <Selector
              onClick={handleSelector("6", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "6"}
            >
              6
            </Selector>
            <Selector
              onClick={handleSelector("7", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "7"}
            >
              7
            </Selector>
            <Selector
              onClick={handleSelector("8", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "8"}
            >
              8
            </Selector>
            <Selector
              onClick={handleSelector("9", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "9"}
            >
              9
            </Selector>
            <Selector
              onClick={handleSelector("10", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "10"}
            >
              10
            </Selector>
            <Selector
              onClick={handleSelector("11", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "11"}
            >
              11
            </Selector>
            <Selector
              onClick={handleSelector("12", "algunMiembroUtilizaApp")}
              selected={algunMiembroUtilizaApp === "12"}
            >
              12
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="¿Qué elementos de la aplicación le parecen más importantes? "
          value={importantesApp}
          id="importantesApp"
          onChange={handleChange}
        />
        <StyledInput
          labelTxt="¿Por qué?"
          value={detalleImportantesApp}
          id="detalleImportantesApp"
          onChange={handleChange}
        />
        <SelectorContainer>
          <p>
            Cuándo se trata de recibir un mensaje sobre su entorno y sobre
            salud, ¿Qué medio prefiere?
          </p>
          <OptionsWrapper>
            <Selector
              onClick={handleSelector("Tripticos", "medioMensajes")}
              selected={medioMensajes === "Tripticos"}
            >
              Tripticos
            </Selector>
            <Selector
              onClick={handleSelector("Radio", "medioMensajes")}
              selected={medioMensajes === "Radio"}
            >
              Radio
            </Selector>
            <Selector
              onClick={handleSelector("Televisíón", "medioMensajes")}
              selected={medioMensajes === "Televisíón"}
            >
              Televisíón
            </Selector>
            <Selector
              onClick={handleSelector("Redes sociales", "medioMensajes")}
              selected={medioMensajes === "Redes sociales"}
            >
              Redes sociales
            </Selector>
            <Selector
              onClick={handleSelector("Vecinos", "medioMensajes")}
              selected={medioMensajes === "Vecinos"}
            >
              Vecinos
            </Selector>
            <Selector
              onClick={handleSelector("Personal de salud", "medioMensajes")}
              selected={medioMensajes === "Personal de salud"}
            >
              Personal de salud
            </Selector>
          </OptionsWrapper>
        </SelectorContainer>
        <StyledInput
          labelTxt="¿Por qué?"
          value={detalleMedio}
          id="detalleMedio"
          onChange={handleChange}
        />

        <ContinueBtn
          style={{ margin: "60px auto" }}
          disabled={false}
          onClick={handleContinue}
        >
          Guardar encuesta
        </ContinueBtn>
      </FieldsContainer>
    </Content>
  );
};

export default Estrategias;
