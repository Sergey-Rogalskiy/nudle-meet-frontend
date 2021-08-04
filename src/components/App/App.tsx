import React from 'react';
import { Switch, Route } from 'react-router';
import { Intro } from '../../pages';
import './App.css';

function App() {
  return (
    <>
      <h1>Header</h1>
      <Switch>
        <Route path="/2">
          <p>Second</p>
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </>
  );
}

export default App;
