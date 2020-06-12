import React from "react"
import { render } from 'react-dom'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import App from './app'
import Home from './views/home'
import Plaza from './views/plaza'
import Table from './views/table'

render((
  <HashRouter>
    <Switch>
      <App path='/'>
        <Route path='/home' component={Home}/>
        <Route path='/plaza' component={Plaza}/>
        <Route path='/table' component={Table}/>
      </App>
    </Switch>
  </HashRouter>
), document.getElementById('app'))
