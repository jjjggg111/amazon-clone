import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /*localhost.com*/
}
{
  /*localhost.com/checkout*/
}
{
  /*localhost.com/login*/
}

export default App;
