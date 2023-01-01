import * as React from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NewGamePage from "./pages/NewGamePage";

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
            <Route path='/login' element={<LoginPage />} />
            <Route path='/new_game' element={<NewGamePage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
