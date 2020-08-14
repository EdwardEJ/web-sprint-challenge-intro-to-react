import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import BASE_URL from './constants'


const App = () => {
  const [characterInfo, setCharacterInfo] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        debugger
        setCharacterInfo(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {

      }
    </div>
  );
}

export default App;
