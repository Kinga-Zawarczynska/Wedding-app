import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FirstView from './components/FirstView'
import SignIn from './components/SignIn'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={ FirstView } />
          <Route path="/signin" component={ SignIn } />
    
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;