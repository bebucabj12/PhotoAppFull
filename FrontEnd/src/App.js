import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import NavBarCustom from './Components/NavBarCustom';
import Profile from './Components/Profile';
import ProtectedRoute from './Components/ProtectedRoute';
import LandingPage from './Components/LandingPage';
import Search from './Components/Search'


const App = () => (
  <div>
    <NavBarCustom/>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/search' component={Search}/>
      <ProtectedRoute exact path ='/profile' component={Profile}/>
      <Route path='*' component={() => '404 not Found'}/>
      </Switch>
  </div>
)
 

export default App;
