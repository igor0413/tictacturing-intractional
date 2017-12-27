import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'
import {BrowserRouter, Switch} from 'react-router-dom'
import Template from './containers/Template'
import Profile from "./containers/Profile";
import TicTacToe from "./containers/TicTacToe";


ReactDOM.render(
  <BrowserRouter>
    <Template>
      <Switch>
        <Route exact path='/' component={TicTacToe}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </Template>
  </BrowserRouter>,
  document.getElementById('root'))

