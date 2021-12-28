import React from 'react';
import {Route, NavLink, HashRouter, Routes } from 'react-router-dom';
import Home from './Home';
import OneDay from './OneDay';
import Day5 from './Day5';

class App extends React.Component {
  render() {
    return(
      <HashRouter>
          <div>
            <ul className = 'header'>
              <li><NavLink to = "/">Home</NavLink></li>
            </ul>
          </div>
          <div className = 'content'>
            <Routes>
              <Route  path = '/' element = {<Home/>}></Route>
              <Route  path = '/oneDay' element = {<OneDay/>}></Route>
              
              <Route  path = '/day5' element = {<Day5/>}></Route>
            </Routes>
          </div>
      </HashRouter>
    )
  }
}

export default App;