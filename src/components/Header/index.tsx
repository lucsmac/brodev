import React from 'react'

import { IoIosClose } from 'react-icons/io'

import { Container, TopWrapper, Logo, Title } from './styles'
import logoImg from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <TopWrapper>
        <Link to="/" className="logo">
          <Logo src={logoImg} alt="Brodev" />
        </Link>
        <Link to="/">
          <IoIosClose />
        </Link>
      </TopWrapper>
      <Title>{children}</Title>
    </Container>
  )
}

export default Header
