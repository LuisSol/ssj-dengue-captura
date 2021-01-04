import React from "react";
import { ThemeProvider } from "styled-components";

// styles
import { nomalTheme } from "./styles/theme";

// components
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <ThemeProvider theme={nomalTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
