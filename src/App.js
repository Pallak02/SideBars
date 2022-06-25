
import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Reports from './pages/reports';

import Products from './pages/products';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/reports' exact component={Reports}/>
     <Route path='/products' exact component={Products}/>
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
