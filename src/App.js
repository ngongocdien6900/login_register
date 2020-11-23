import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (

    <Switch>
      <Route path="/auth/register" component={Register}/>
      <Route path="/auth/login" component={Login}/>
    </Switch>
    
  );
}

export default App;
