import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Route path='/' exact component={Home}/>
      <Route path='/services' exact component={Services}/>
      <Route path='/products' exact component={Products}/>
      <Route path='/sign-up' exact component={SignUp}/>
      </Router>
    </div>
  );
}

export default App;
