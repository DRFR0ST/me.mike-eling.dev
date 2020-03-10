import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/';
import Post from './pages/post/';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </Router>
  );
}

export default App;
