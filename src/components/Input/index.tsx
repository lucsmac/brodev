import React from 'react'
import styled from 'styled-components'

interface InputProps {
  type?: string,
  placeholder: string,
}

const InputContainer = styled.label`
  font-size: 1.2rem;
  font-family: Archivo;
  color: rgba(0, 0, 0, 0.2);

  > input, > textarea {
    width: 100%;
    margin: .35rem 0;
    padding: .7rem .4rem;

    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    background-color: rgba(0, 0, 0, 0.03);
  }

  > textarea {
    resize: none;
    height: 10rem;
  }
`

const Input: React.FC<InputProps> = ({ type, placeholder, children }) => {
  return (
    <InputContainer>
      {type && type === 'textarea' ? <textarea placeholder={placeholder} ></textarea> : <input type={type} placeholder={placeholder} />}
    </InputContainer>
  )
}

export default Input
