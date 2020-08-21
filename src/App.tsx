import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld'
import HooksMessage from './components/hook'
import MouseMove from './components/mouseMove'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HelloWorld message ='dsa'  />
          <HooksMessage />
          <MouseMove />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;
