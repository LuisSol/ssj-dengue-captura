import React from "react";

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

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>Inicio</Title>
        <ButtonsContainer>
          <PrimaryBtn>
            Capturar encuesta
            <CircleIcon>
              <DocIcon />
            </CircleIcon>
          </PrimaryBtn>
          <PrimaryBtn>
            Continuar encuesta
            <CircleIcon>
              <ConIcon />
            </CircleIcon>
          </PrimaryBtn>
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
