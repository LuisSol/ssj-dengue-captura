import React from "react";
import { ThemeProvider } from "styled-components";

// styles
import { nomalTheme } from "./styles/theme";

// components
import AppRouter from "./routers/AppRouter";

// Context
import { MasterFormProvider } from "./Contexts/MainForm";

function App() {
  return (
    <ThemeProvider theme={nomalTheme}>
      <MasterFormProvider>
        <AppRouter />
      </MasterFormProvider>
    </ThemeProvider>
  );
}

export default App;
