import * as React from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Register from "./layout/register/Register";
import Login from "./layout/login/Login";
import NewGame from "./layout/newGame/NewGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import RegisterPage from "./pages/RegisterPage";

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
            <Route path='/' exact element={<EntryPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/new_game' element={<NewGame />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
