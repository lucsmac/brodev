import React from 'react'

import { Container } from './styles'
import Header from '../../components/Header'
import SetHead from '../../components/SetHead'

const DevsList = () => {
  return (
    <Container>
      <SetHead title="Brodev | Lista de perfis" description="Encontre um brodev a partir da localização ou por interesses em comum" />

      <Header>Encontre um dev e entre em contato <span role="img" aria-label="hands">🤘</span></Header>
    </Container>
  )
}

export default DevsList
