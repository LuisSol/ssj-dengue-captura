import { useEffect, FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ScrollToTop: FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
