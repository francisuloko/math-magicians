import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
