import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import Routers from "./routes/Routers";
import { HashRouter } from "react-router-dom";
import Chatbot from "./components/chatBotUi";


function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Chatbot />
          <Routers />
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
