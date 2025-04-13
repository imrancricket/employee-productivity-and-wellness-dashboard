import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import Routers from "./routes/Routers";
import { BrowserRouter } from "react-router-dom";
import Chatbot from "./components/chatBotUi";


function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Chatbot />
          <Routers />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
