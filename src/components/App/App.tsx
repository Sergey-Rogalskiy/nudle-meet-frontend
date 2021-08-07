import React from 'react';
import { Switch, Route } from 'react-router';
import { Room, Login } from '../../pages';
import { useDispatch } from '../../types';
import { wsInitAction } from '../../services/actions/rooms';
import './App.css';

function App() {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(wsInitAction())
  }, [dispatch])

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
