import React from 'react';
import { Switch, Route } from 'react-router';
import { Room, Login } from '../../pages';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/:name">
          <Room />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
