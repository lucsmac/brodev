import React from 'react'

import { Container, FormBlock, Title, InputGroup } from './styles'
import Header from '../../components/Header'
import Input from '../../components/Input'
import SetHead from '../../components/SetHead'
import Footer from '../../components/Footer'

const DevForm = () => {
  return (
    <Container>
      <SetHead title="Brodev | Cadastrar meu perfil" description="Realize o cadastro com suas informações para tornar seu perfil encontrável por outros devs" />

      <Header>Capriche nas suas informações e torne-se um Brodev <span role="img" aria-label="rocket and fire">🚀🔥</span></Header>

      <form>
        <FormBlock>
          <Title>Sobre mim</Title>

          <InputGroup>
            <Input
              placeholder="Nome"
            />
            <div className="inputsEndereco">
              <Input
                placeholder="UF"
              />
              <Input
                placeholder="Cidade"
              />
            </div>
            <Input
              placeholder="Foto"
            />
            <Input
              type="textarea"
              placeholder="Bio"
            />
          </InputGroup>
        </FormBlock>

        <FormBlock>
          <Title>Meus contatos</Title>

          <InputGroup>
            <Input
              placeholder="Github"
            />
            <Input
              placeholder="Linkedin"
            />
            <Input
              placeholder="Instagram"
            />
          </InputGroup>
        </FormBlock>
      </form>

      <Footer />
    </Container>
  )
}

export default DevForm
