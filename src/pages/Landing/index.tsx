import React from 'react'

import { Container, Hero, ButtonsGroup } from './styles'
import Button from '../../components/Button'

import heroImg from './../../assets/images/hero.png'
import { Link } from 'react-router-dom'
import SetHead from '../../components/SetHead'

const Landing = () => {
  return (
    <Container>
      <SetHead title="Brodev | Início" description="Encontre um Brodev e transforme a experiência de codar." />

      <Hero>
        <img src={heroImg} alt="Brodev" />
        <h2>Programar sozinho pode ser duro às vezes. Encontre um Brodev e transforme a experiência de codar.</h2>
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
