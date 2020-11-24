import AuthFeatures from 'features/Auth';
import HomeFeatures from 'features/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (

    <Switch>
      <Route path="/" exact component={HomeFeatures} />
      <Route path="/auth" component={AuthFeatures} />
    </Switch>
    
  );
}

export default App;
