import React from "react"
import { render } from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from './app'
import Home from './views/home'

render((
  <HashRouter>
    <Switch>
      <App path='/'>
        <Route path='/home' component={Home}/>
      </App>
    </Switch>
  </HashRouter>
), document.getElementById('app'))
