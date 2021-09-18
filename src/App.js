import React from 'react'
import { Switch, Route } from 'react-router'

import AppBar from './components/AppBar'
import HomeView from './views/HomeView'
import LogInView from './views/LogInView'
import PhoneBookView from './views/PhoneBookView'
import SignUpView from './views/SignUpView'

export default function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={SignUpView} />
        <Route path="/login" component={LogInView} />
        <Route path="/contacts" component={PhoneBookView} />
      </Switch>
    </>
  )
}
