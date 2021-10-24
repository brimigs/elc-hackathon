import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Color from './Pages/Color'
import Beauty from './Pages/Beauty'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#040a2b'
    }
  },
  typography: {
    FontFamily: 'Helvetica',
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>
        <Switch>
          <Route exact path="/App">
            <App />
          </Route>
          <Route exact path="/Beauty">
            <Beauty />
          </Route>
          <Route exact path="/Color">
            <Color />
          </Route>
        </Switch>
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
