import React from "react";
import { useHistory } from "react-router-dom";

// styles
import {
  Container,
  Content,
  Title,
  ButtonsContainer,
  CircleIcon,
} from "./Home.styled";

// components
import Footer from "../../components/ui/Footer";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

// icons
import { ReactComponent as DocIcon } from "../../assets/icons/NewTrans.svg";
import { ReactComponent as ConIcon } from "../../assets/icons/ContTrans.svg";
import { ReactComponent as XlsIcon } from "../../assets/icons/xls.svg";

// contexts
import { useMasterFormDistach, useMasterForm } from "../../Contexts/MainForm";

const Home = () => {
  const history = useHistory();
  const formDispatcher = useMasterFormDistach();
  const { enProceso } = useMasterForm();

  const handleInitCapture = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    formDispatcher({ type: "START_FORM" });
    history.push("captura/nueva");
  };

  const handleContinueCapture = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push("captura/nueva");
  };

  return (
    <Container>
      <Content>
        <Title>Inicio</Title>
        <ButtonsContainer>
          <PrimaryBtn onClick={handleInitCapture}>
            Capturar encuesta
            <CircleIcon>
              <DocIcon />
            </CircleIcon>
          </PrimaryBtn>
          {enProceso && (
            <PrimaryBtn onClick={handleContinueCapture}>
              Continuar encuesta
              <CircleIcon>
                <ConIcon />
              </CircleIcon>
            </PrimaryBtn>
          )}
          <PrimaryBtn>
            Exportar encuestas
            <CircleIcon>
              <XlsIcon />
            </CircleIcon>
          </PrimaryBtn>
        </ButtonsContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
