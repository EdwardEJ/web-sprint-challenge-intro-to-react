// Write your Character component here
import React from 'react'

const Character = (props) => {

  const { info } = props;

  return (
    <div className="charContainer">
      {info.name}
      <button >{info.birth_year}</button>
    </div>
  )
}

export default Character