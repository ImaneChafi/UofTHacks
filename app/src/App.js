import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import School from './components/school/school.js'
import Games from './components/games/games.js'
import Feed from './components/feed/feed.js'
import Profile from './components/profile/profile.js'
import Login from './components/login/login.js'
import './App.css';

function App() {
  const [login, setLogin] = useState(true)
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
          <Route exact path='/' render={() => <School/>} />
          <Route exact path='/feed' render={() => <Feed/>} />
          <Route exact path='/games' render={() => <Games/>} />
          <Route exact path='/profile' render={() => <Profile/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
