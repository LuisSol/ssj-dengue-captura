import React, { useEffect, useReducer } from "react";

import {
  Container,
  Content,
  Title,
  Encuesta,
  Total,
  FoliosWrapper,
} from "./Encuestas.styled";

// components
import Footer from "../../components/ui/Footer";

// utils
import { encuestasReducer, defaultState } from "./Encuestas.reducer";
import { db } from "../../utils/Firebase";

const Encuestas = () => {
  const [{ total, encuestas }, dispatch] = useReducer(
    encuestasReducer,
    defaultState
  );

  const getEncuestas = async () => {
    db.collection("2020").onSnapshot((querySnapshot) => {
      const encuestas: string[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        encuestas.push(data.folio);
      });
      dispatch({ type: "SET_ENCUESTAS", encuestas, total: encuestas.length });
    });
  };

  useEffect(() => {
    getEncuestas();
  }, []);

  return (
    <Container>
      <Content>
        <Title>Encuestas</Title>
        <Total>Total de Encuestas: {total}</Total>
        <FoliosWrapper>
          {encuestas.map((encuesta, i) => (
            <Encuesta key={`${encuesta}-${i}`}>{`${encuesta}, `}</Encuesta>
          ))}
        </FoliosWrapper>
      </Content>
      <Footer />
    </Container>
  );
};

export default Encuestas;
