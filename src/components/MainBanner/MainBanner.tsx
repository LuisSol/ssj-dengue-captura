import React, { FC } from "react";
import { useHistory } from "react-router-dom";

// styles
import {
  BannerHero,
  Container,
  LoggoWrapper,
  Title,
  BottomBar,
  NavBar,
  HomeLogoContainer,
  NavItemContainer,
} from "./MainBanner.styled";

// icons
import { ReactComponent as JaliscoLogo } from "../../assets/icons/JaliscoLogo.svg";
import { ReactComponent as HomeLogo } from "../../assets/icons/home.svg";

const MainBanner: FC = () => {
  const history = useHistory();

  const handleGoTo = (path: string) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(path);
  };

  return (
    <Container>
      <BannerHero>
        <LoggoWrapper>
          <JaliscoLogo />
        </LoggoWrapper>
        <Title>
          Sistema de captura.
          <br />
          Encuestas dengue
        </Title>
        <NavBar>
          <HomeLogoContainer onClick={handleGoTo("/")}>
            <HomeLogo />
          </HomeLogoContainer>
          |
          <NavItemContainer onClick={handleGoTo("/encuestas")}>
            Encuestas
          </NavItemContainer>
        </NavBar>
      </BannerHero>
      <BottomBar />
    </Container>
  );
};

export default MainBanner;
