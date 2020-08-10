import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string,
  placeholder: string,
}

const InputContainer = styled.label`
  font-size: 1.2rem;
  font-family: Archivo;
  color: rgba(0, 0, 0, 0.2);

  > input {
    width: 100%;
    margin: .35rem 0;
    padding: .7rem .4rem;

    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    background-color: rgba(0, 0, 0, 0.03);
  }
`

const Input: React.FC<InputProps> = ({ type, placeholder, ...rest }) => {
  return (
    <InputContainer>
      <input type={type} placeholder={placeholder} {...rest} />
    </InputContainer>
  )
}

export default Input
