import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 180px;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

export const BannerHero = styled.div`
  display: flex;
  height: 100%;
  padding: 20px 20px 0 20px;
  position: relative;
  width: 100%;

  ${({ theme: { up, breakpoints } }) => up(breakpoints.maxDesk)} {
    max-width: 1220px;
  }
`;

export const LoggoWrapper = styled.div`
  svg {
    height: 110px;
    width: 110px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.aquaBlue};
  font-size: 30px;
  margin-left: 10px;
`;

export const BottomBar = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGray};
  bottom: 0;
  width: 100%;
  height: 30px;
  position: absolute;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
  bottom: 0;
  width: 100%;
  height: 30px;
  position: absolute;
  z-index: 1;
  padding-left: 20px;
`;

export const HomeLogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

export const NavItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 20px;
`;
