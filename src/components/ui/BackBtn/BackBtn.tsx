import React from "react";
import { useHistory } from "react-router-dom";

// styles
import { Button } from "./BackBtn.styled";

// icons
import { ReactComponent as BackArrow } from "../../../assets/icons/BackDesktop.svg";

const BackBtn = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Button onClick={goBack}>
      <BackArrow />
    </Button>
  );
};

export default BackBtn;
