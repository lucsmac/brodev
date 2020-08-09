import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import styled from 'styled-components'

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--primary);
  
  padding: 1rem 5rem;

  > img {
    opacity: .9;

    &:hover { 
      opacity: 1;
    }
  }

  > div {
    display: flex;
    align-items: center;

    > p {
      color: var(--white);
      font-size: .8rem;
      font-family: Archivo;

      > a {
        text-decoration: none;
        color: white;
        
        &:hover {
          text-decoration: underline;
          color: var(--tertiary);
        }
      }
      
    }

    > a svg {
      color: white;
      font-size: 1.25rem;
      
      margin-left: .5rem;

      transition: background-color 0.2s;

      &:hover { 
        color: var(--tertiary);
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logoImg} alt="Brodev" />

      <div>
        <p>Desenvolvido por <a href="https://lucasmacedoportfolio.netlify.app/" target="_blank" rel="noopener noreferrer"><strong>Lucas Macedo</strong></a></p>
        <a href="https://github.com/lucsmac" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
        <a href="https://www.linkedin.com/in/lucsmac/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
        <a href="https://www.instagram.com/lucs_macedo/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
      </div>
    </FooterContainer>
  )
}

export default Footer
