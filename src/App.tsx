import React from 'react'
import Navigation from './components/navigation'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import PageRenderer from './page-renderer'
import { NavigationProps } from './components/navigation'

const App: React.FC = () => {
  const user: NavigationProps = {
    user: { firstName: 'Miguel', lastName: 'Coder' },
  }

  const RedirectToHome = () => <Redirect to="/home" />
  const Error404 = () => <h2>404</h2>

  return (
    <Router>
      <div className="App">
        <Navigation {...user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={RedirectToHome} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
