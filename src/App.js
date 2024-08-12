import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>

      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />

    </Router>
  );
};

export default App;
