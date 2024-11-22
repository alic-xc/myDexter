import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Routes from "./routers";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
