import React from 'react'
import styled from 'styled-components'

const StyledCharContainer = styled.div`
 font-size: 1rem;
 border: 3px solid black;
 border-radius: 2%;
 width: 70%;
 margin: auto;
`
const StyledName = styled.p`
  color: white;
  font-size: 2rem;
`

const StyledDetails = styled.p`
    font-weight: bold;
    &:hover{
      color: blue;
    }
`

const Character = (props) => {

  const { info } = props;

  return (
    <StyledCharContainer>
      <StyledName>{info.name}</StyledName>
      <StyledDetails>Gender: {info.gender}</StyledDetails>
      <p>Birth Year: {info.birth_year}</p>
      <p>Eye Color: {info.eye_color}</p>
      <p>Hair Color: {info.hair_color}</p>
      <p>Height: {info.height}</p>
      <p>Skin Color: {info.skin_color}</p>
    </StyledCharContainer>
  )
}

export default Character