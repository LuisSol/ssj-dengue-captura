import React, { FC } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";

// styled
import { Container } from "./MainForm.styled";

// conponents
import IniciarCaptura from "../../components/IniciarCaptura";
import Sociodemograficas from "../../components/Sociodemograficas";
import Footer from "../../components/ui/Footer";

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
      </Switch>
      <Footer />
    </Container>
  );
};

export default MainForm;
