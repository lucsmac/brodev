import React from 'react'

import { Container, CardList } from './styles'
import Header from '../../components/Header'
import SetHead from '../../components/SetHead'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import SliderCard from '../../components/Slider'

const DevsList = () => {
  return (
    <Container>
      <SetHead title="Brodev | Lista de perfis" description="Encontre um brodev a partir da localização ou por interesses em comum" />

      <Header>Encontre um dev e entre em contato <span role="img" aria-label="hands">🤘</span></Header>

      <CardList>
        <SliderCard>
          <Card key="1" />
          <Card key="2" />
          <Card key="3" />
          <Card key="4" />
          <Card key="5" />
          <Card key="6" />
        </SliderCard>
      </CardList>

      <Footer />
    </Container>
  )
}

export default DevsList
