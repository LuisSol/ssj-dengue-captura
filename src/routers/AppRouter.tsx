import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// components
import PublicRoute from "./PublicRoute";
import ScrollToTop from "./ScrollToTop";
import MainContainer from "../components/MainContainer";
import MainBanner from "../components/MainBanner";

//pages
import Home from "../pages/Home";

// utils
import url from "./url";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainContainer>
        <MainBanner />
        <Switch>
          <PublicRoute path={url.home} exact component={Home} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default AppRouter;
