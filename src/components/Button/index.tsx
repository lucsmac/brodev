import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  color?: string
}

const ButtonContainer = styled.button`
  background-color: ${(props) => props.color ? props.color : 'var(--tertyary)'};
  color: var(--white);

  padding: 16px 40px;
  width: 20rem;
  border-radius: 8px;
  border: 2px solid var(--tertiary);
  
  font: 1rem Archivo;

  cursor: pointer;

  @media (max-width: 400px) {
    width: 15rem;
  }

  @media (min-width: 760px) {
    margin: 0 7px;
  }
`

const Button: React.FC<ButtonProps> = ({ color, children }) => {
  return (
    <ButtonContainer color={color} type="button">
      {children}
    </ButtonContainer>
  )
}

export default Button
