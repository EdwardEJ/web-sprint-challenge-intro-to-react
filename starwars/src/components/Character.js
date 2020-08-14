import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledIntro = styled.div`
  transform: rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
`

const Character = (props) => {

  const { info } = props;

  return (
    <StyledCharContainer>
      <StyledIntro>
        <StyledName>{info.name}</StyledName>
        <StyledDetails>Gender: {info.gender}</StyledDetails>
        <p>Birth Year: {info.birth_year}</p>
        <p>Eye Color: {info.eye_color}</p>
        <p>Hair Color: {info.hair_color}</p>
        <p>Height: {info.height}</p>
        <p>Skin Color: {info.skin_color}</p>
      </StyledIntro>
    </StyledCharContainer>
  )
}

export default Character