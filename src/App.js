import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Contact from './Components/Pages/Contact';



function App() {
  return (
    // Holding our app in fragments instead of divs.
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* '/' means homepage path and connects to the homepages component built */}
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
