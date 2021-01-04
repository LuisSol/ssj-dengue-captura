import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: "#000000";
      white: "#FFFFFF";
      aquaBlue: "#00716e";
      darkAquaBlue: "#135654";
      blueGray: "#586771";
      gray: "#414042";
      lightGray: "#f2f2f2";
      gray2: "#868686";
    };
    spacing: {
      xxs: "4px";
      xs: "8px";
      s: "12px";
      m: "16px";
      ml: "25px";
      l: "32px";
      xl: "48px";
    };
    breakpoints: {
      maxDesk: "1220px";
      desktop: "992px";
      tablet: "768px";
      mobile: "576px";
      midHeight: "700px";
    };
    mediaquerys: {
      mobile: "(max-width: 576px)";
      heightMed: "(max-height: 700px)";
    };
    up: (breakpoint: string) => string;
    down: (breakpoint: string) => string;
    upHeight: (breakpoint: string) => string;
    downHeight: (breakpoint: string) => string;
  }
}

export const nomalTheme: DefaultTheme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    aquaBlue: "#00716e",
    darkAquaBlue: "#135654",
    blueGray: "#586771",
    gray: "#414042",
    lightGray: "#f2f2f2",
    gray2: "#868686",
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "16px",
    ml: "25px",
    l: "32px",
    xl: "48px",
  },
  breakpoints: {
    maxDesk: "1220px",
    desktop: "992px",
    tablet: "768px",
    mobile: "576px",
    midHeight: "700px",
  },
  mediaquerys: {
    mobile: "(max-width: 576px)",
    heightMed: "(max-height: 700px)",
  },
  up: (breakpoint: string) => `@media (min-width: ${breakpoint})`,
  down: (breakpoint: string) => `@media (max-width: ${breakpoint})`,
  upHeight: (breakpoint: string) => `@media (min-height: ${breakpoint})`,
  downHeight: (breakpoint: string) => `@media (max-height: ${breakpoint})`,
};
