import React from 'react'

const Character = (props) => {
  const { close, info } = props;

  console.log(info)
  return (
    <div className='detailsContainer'>
      {
        <p>Gender: {info.gender}</p>
      }
      <button onClick={close}>Close</button>
    </div>
  )

}

export default Character