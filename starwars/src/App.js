import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import BASE_URL from './constants'

import Character from './components/Character'


const App = () => {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [currentCharId, setCurrentCharId] = useState(null)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = birth_year => {
    setCurrentCharId(birth_year)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setCharacterInfo(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const Characters = (props) => {

    const { info } = props;

    return (
      <div className="charContainer">
        {info.name}
        <button onClick={() => openDetails(info.birth_year)}>{info.birth_year}</button>
      </div>
    )
  }


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characterInfo.map((char, indx) => {
          return <Characters key={indx} info={char} openDetails={openDetails} />
        })
      }
      {
        currentCharId && <Character
          charId={currentCharId}
          close={closeDetails}
        />
      }
    </div>
  );
}

export default App;
