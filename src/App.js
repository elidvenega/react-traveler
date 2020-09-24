import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Route path='/' exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
