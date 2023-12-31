import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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
          <Route path="/wal/Experience" element={<Experience />} />
          <Route path="/wal/Projects" element={<Projects />} />
          <Route path="/wal/Hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
