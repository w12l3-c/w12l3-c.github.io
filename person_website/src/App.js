import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Experience from './Experience';
import Hobbies from './Hobbies';
import Projects from './Projects';

import logo from './logo.svg';
import './App.css';

// Use for routing
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/wal" element={<Home />} />
          <Route path="/Experience" element={<Experience />} exact />
          <Route path="/Projects" element={<Projects />} exact />
          <Route path="/Hobbies" element={<Hobbies />} exact />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
