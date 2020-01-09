import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FirstView from './components/FirstView'
import ImagesArea from './components/ImagesArea';
import SignIn from './components/SignIn'
import * as ROUTES from './constants/routes'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={ FirstView } />
          <Route path={ROUTES.SIGN_IN} component={ SignIn } />
        </Switch>
        <ImagesArea/>
      </div>
    </BrowserRouter>
  );
}

export default App;