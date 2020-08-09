import React from 'react'

import { Container, Hero, ButtonsGroup } from './styles'
import Button from '../../components/Button'

import heroImg from './../../assets/images/hero.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Container>
      <Hero>
        <img src={heroImg} alt="Brodev" />
        <h2>Encontre um Brodev e descubra novas oportunidades.</h2>
      </Hero>
      <ButtonsGroup>
        <Link to="quero-um-brodev">
          <Button color="var(--tertiary)">Encontre um brodev</Button>
        </Link>
        <Link to="quero-ser-um-brodev">
          <Button>Fique disponível</Button>
        </Link>
      </ButtonsGroup>
    </Container>
  )
}

export default Landing
