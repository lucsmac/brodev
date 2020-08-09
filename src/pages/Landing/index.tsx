import React from 'react'

import { Container, Hero, ButtonsGroup } from './styles'
import Button from '../../components/Button'

import heroImg from './../../assets/images/hero.png'

const Landing = () => {
  return (
    <Container>
      <Hero>
        <img src={heroImg} alt="Brodev" />
        <h2>Encontre um Brodev e descubra novas oportunidades.</h2>
      </Hero>
      <ButtonsGroup>
        <Button as={Link} color="var(--tertiary)">Encontre um brodev</Button>
        <Button>Fique disponível</Button>
      </ButtonsGroup>
    </Container>
  )
}

export default Landing
