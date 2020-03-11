import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// @ts-ignore
import LitteraProvider from 'react-littera'
import Home from './pages/home/';
import Post from './pages/post/';

function App() {
  const [language, setLanguage] = useState('en_US')
  
  return (
    <LitteraProvider locale={language} setLocale={setLanguage}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </Router>
    </LitteraProvider>
  );
}

export default App;
