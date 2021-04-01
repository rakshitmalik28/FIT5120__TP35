import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Identify from './components/pages/Identify';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route path ='/' exact component = {Home}/>
       <Route path ='/identify' component = {Identify} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
