import React, { FC } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";

// styled
import { Container } from "./MainForm.styled";

// conponents
import IniciarCaptura from "../../components/IniciarCaptura";
import Sociodemograficas from "../../components/Sociodemograficas";
import Footer from "../../components/ui/Footer";
import Servicios from "../../components/Servicios";
import Actividades from "../../components/Actividades";
import Estrategias from "../../components/Estrategias";

const MainForm: FC<RouteComponentProps> = ({ match }) => {
  return (
    <Container>
      <Switch>
        <Route path={`${match.url}/nueva`} exact component={IniciarCaptura} />
        <Route
          path={`${match.url}/sociodemograficas`}
          exact
          component={Sociodemograficas}
        />
        <Route path={`${match.url}/servicios`} exact component={Servicios} />
        <Route
          path={`${match.url}/actividades`}
          exact
          component={Actividades}
        />
        <Route
          path={`${match.url}/estrategias`}
          exact
          component={Estrategias}
        />
      </Switch>
      <Footer />
    </Container>
  );
};

export default MainForm;
