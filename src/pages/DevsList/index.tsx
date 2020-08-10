import React from 'react'

import { Container, CardList } from './styles'
import Header from '../../components/Header'
import SetHead from '../../components/SetHead'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const DevsList = () => {
  return (
    <Container>
      <SetHead title="Brodev | Lista de perfis" description="Encontre um brodev a partir da localização ou por interesses em comum" />

      <Header>Encontre um dev e entre em contato <span role="img" aria-label="hands">🤘</span></Header>

      <CardList>
        <Card />
      </CardList>

      <Footer />
    </Container>
  )
}

export default DevsList
