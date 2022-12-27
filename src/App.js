import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer, Gallery, Header, Drinks, Meals } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Footer />
          </Route>
          <Route exact path="/Meals">
            <Meals />
          </Route>
          <Route exact path="/Drinks">
            <Drinks />
          </Route>
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
          <Route exact path="/Footer">
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>

  );

};

export default App;
