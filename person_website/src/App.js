import React from 'react';
import { render } from "react-dom";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Experience from './Experience';
import Hobbies from './Hobbies';
import Projects from './Projects';

import logo from './logo.svg';
import './App.css';

// Use for routing
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="wal" element={<Home />} />
          <Route path="Experience" element={<Experience />} exact />
          <Route path="Projects" element={<Projects />} exact />
          <Route path="Hobbies" element={<Hobbies />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
