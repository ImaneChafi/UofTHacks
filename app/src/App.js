import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import School from './components/school/school.js'
import Games from './components/games/games.js'
import Opportunities from './components/opportunities/opportunities.js'
import Profile from './components/profile/profile.js'
import Login from './components/login/login.js'
import './App.css';


function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)
  
  if (!login) {
    return (
      <div className="App">
        <Login 
          setLogin={setLogin}
          setUser={setUser}
        />
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <School user={user} />} />
          <Route exact path='/feed' render={() => <Opportunities user={user}/>} />
          <Route exact path='/games' render={() => <Games user={user}/>} />
          <Route exact path='/profile' render={() => <Profile user={user}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;