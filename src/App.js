/*
 * @Descripttion:
 * @version:
 * @Author: hunt
 * @Date: 2020-09-07 17:30:32
 * @LastEditors: hunt
 * @LastEditTime: 2020-09-07 17:41:35
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  console.log('1234');
  const aaa = '12345';
  console.log(aaa);
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
