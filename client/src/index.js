import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DecisionListPage from './components/DecisionListPage';
import AddDecisionPage from './components/AddDecisionPage';
import AddOptionsPage from './components/AddOptionsPage';
import AddFactorsPage from './components/AddFactorPage';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Home from "./components/Home"
import DetailsPage from './components/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/add-decision" component = {AddDecisionPage}/>
            <Route path = "/decisions" component = {DecisionListPage}/>
            <Route path = "/add-option/:decisionId" component = {AddOptionsPage}/>
            <Route path = "/add-factors/:decisionId/:optionId" component = {AddFactorsPage}/>
            <Route path= '/details/:decisionId' component = {DetailsPage} />
            <Route path = '/login' component = {LoginPage}/>
            <Route path = '/register' component = {RegistrationPage}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
