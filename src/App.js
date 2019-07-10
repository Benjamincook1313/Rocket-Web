import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

library.add(faRocket)

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={ Home }/>
      </Switch>
    </HashRouter>
  );
}

export default App;
