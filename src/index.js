import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
        <Router>
        <Switch>
          <Route exact path="/">
            <App position='center'/>
          </Route>
          <Route path="/projects">
            <App position='left'/>
          </Route>
          <Route path="/about">
            <App position='right'/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
