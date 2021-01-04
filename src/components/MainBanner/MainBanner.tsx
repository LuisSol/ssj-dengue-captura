import React, { FC } from "react";

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
          <HomeLogoContainer>
            <HomeLogo />
          </HomeLogoContainer>
          |<NavItemContainer>Encuestas</NavItemContainer>
        </NavBar>
      </BannerHero>
      <BottomBar />
    </Container>
  );
};

export default MainBanner;
