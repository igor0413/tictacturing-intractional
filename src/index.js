import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'
import {BrowserRouter, Switch} from 'react-router-dom'
import Template from './containers/Template'
import Profile from "./containers/Profile";
import Home from "./containers/Home";


ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Template}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </Route>
  </BrowserRouter>,
  document.getElementById('root'))

