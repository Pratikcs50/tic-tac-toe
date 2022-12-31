import * as React from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Entry from "./layout/entry/Entry";
import Register from "./layout/register/Register";
import Login from "./layout/login/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2C94C",
    },
    secondary: {
      main: "#2F80ED",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
