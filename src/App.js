import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Employees from './components/Employees/Employees';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/employees' component={Employees} />
      </Switch>
    </Router>
  );
}

export default App;
