import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import LandingPage from './LandingPage'


const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  </Router>
)
export default Routes;
