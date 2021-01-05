import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
