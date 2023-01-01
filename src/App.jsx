import * as React from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Entry from "./layout/entry/Entry";
import Register from "./layout/register/Register";
import Login from "./layout/login/Login";
import NewGame from "./layout/newGame/NewGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
          <Routes>
            <Route path='/' exact element={<Entry />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/new_game' element={<NewGame />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
