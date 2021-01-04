import React, { FC } from "react";
import { Route } from "react-router-dom";

interface Props {
  component: React.ElementType;
  path?: string;
  exact?: boolean;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
