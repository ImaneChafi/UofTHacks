import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import School from './components/school/school.js'
import Games from './components/games/games.js'
import Opportunities from './components/opportunities/opportunities.js'
import Profile from './components/profile/profile.js'
import Login from './components/login/login.js'
import './App.css';


function App() {
  const [login, setLogin] = useState(true)

  const student = {
    name: "Kyoji",
    lastName: "Goto",
    friends: ["Imane", "Paul"],
    classes: ["CSC369", "CSC301", "CSC318", "CSC384", "CSC373", "ANT100"],
    school: "UofT",
    feeds: ["Research", "Events", "Clubs"]
  }
  
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
          <Route exact path='/' render={() => <School user={student} />} />
          <Route exact path='/feed' render={() => <Opportunities user={student}/>} />
          <Route exact path='/games' render={() => <Games user={student}/>} />
          <Route exact path='/profile' render={() => <Profile user={student}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
