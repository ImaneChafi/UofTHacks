import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Profile from './components/profile/profile.js'
import Login from './components/login/login.js'
import './App.css';

function App() {
  const [login, setLogin] = useState(false)
  if (!login) {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Profile/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
