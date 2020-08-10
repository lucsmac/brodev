import React, { useState, useEffect, FormEvent } from 'react'

import { Container, FormBlock, Title, InputGroup, InputGroupTools, ButtonAdd, ToolsViewer, Tool, ButtonSubmit } from './styles'
import Header from '../../components/Header'
import Input from '../../components/Input'
import SetHead from '../../components/SetHead'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

interface EstadoProps {
  id: number,
  sigla: string,
  nome: string,
}

interface CidadeProps {
  id: number,
  nome: string
}

const DevForm = () => {
  const techSugestions = ['React', 'React Native', 'Vue', 'Next', 'Nuxt', 'Ciência de dados', 'Inteligência artificial', 'C', 'C++', 'Java', 'Delphi', 'Basic', 'VB', 'C#', 'Python', 'Pearl', 'Objective C', 'HTML', 'CSS', 'JavaScript', 'PHP', 'ASP', '.Net', 'Ajax', 'JSON', 'jQuery', 'Bootstrap', 'NodeJS', 'AngularJS', 'Knockout', 'Hibernate', 'Struts', 'ORM', 'DAO', 'SQL', 'MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'NoSQL', 'Mongo', 'Cassandra', 'Orientação a Objetos', 'MVC', 'REST', 'Web Services', 'CodeIgniter PHP', 'Zend', 'PhoneGap', 'Appcelerator', 'WordPress', 'CMS', 'Joomla', 'Drupal', 'SVN', 'Git', 'SourceForge']

  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])

  const [name, setName] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')

  const [github, setGithub] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [instagram, setInstagram] = useState('')

  const [learned, setLearned] = useState<string[]>([])
  const [tempLearned, setTempLearned] = useState('')
  const [toLearn, setToLearn] = useState<string[]>([])
  const [tempToLearn, setTempToLearn] = useState('')

  useEffect(() => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
      .then(response => response.json())
      .then(data => setEstados(data))
  }, [])

  useEffect(() => {
    if (uf) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(data => {
          setCidades(data)
        })
    }
  }, [uf])

  const handleAddLearnedItem = () => {
    setLearned((learned) => [...learned, tempLearned])
    setTempLearned('')
  }

  const handleRemoveLearnedItem = (tool: string) => {
    console.log('opan')
    setLearned((learned) => learned.filter(item => item !== tool))
  }

  const handleAddToLearnItem = () => {
    setToLearn((tolearn) => [...tolearn, tempToLearn])
    setTempToLearn('')
  }

  const handleRemoveToLearnItem = (tool: string) => {
    console.log('opan')
    setToLearn((tolearn) => tolearn.filter(item => item !== tool))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const data = {
      name,
      uf,
      city,
      avatar,
      bio,
      github,
      linkedin,
      instagram,
      learned,
      toLearn
    }

    console.log(data)
  }

  return (
    <Container>
      <SetHead title="Brodev | Cadastrar meu perfil" description="Realize o cadastro com suas informações para tornar seu perfil encontrável por outros devs" />

      <Header>Capriche nas suas informações e torne-se um Brodev <span role="img" aria-label="rocket and fire">🚀🔥</span></Header>

      <form onSubmit={handleSubmit}>
        <FormBlock>
          <Title>Sobre mim</Title>

          <InputGroup>
            <Input
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Nome"
            />
            <div className="inputsEndereco">
              <select
                value={uf}
                onChange={({ target }) => setUf(target.value)}
                placeholder="UF"
              >
                <option value="" disabled hidden>UF</option>
                {estados && estados.map((estado: EstadoProps) => (
                  <option key={estado.id} value={estado.sigla} >{estado.sigla}</option>
                ))}
              </select>
              <select
                value={city}
                onChange={({ target }) => setCity(target.value)}
                placeholder="Cidade"
              >
                <option value="" disabled hidden>Cidade</option>
                {cidades && cidades.map((cidade: CidadeProps) => (
                  <option key={cidade.id} value={cidade.nome} >{cidade.nome}</option>
                ))}
              </select>
            </div>
            <Input
              value={avatar}
              onChange={({ target }) => setAvatar(target.value)}
              placeholder="Foto"
            />
            <textarea
              value={bio}
              onChange={({ target }) => setBio(target.value)}
              placeholder="Bio"
            ></textarea>
          </InputGroup>
        </FormBlock>

        <FormBlock>
          <Title>Meus contatos</Title>

          <InputGroup>
            <Input
              value={github}
              onChange={({ target }) => setGithub(target.value)}
              placeholder="Github"
            />
            <Input
              value={linkedin}
              onChange={({ target }) => setLinkedin(target.value)}
              placeholder="Linkedin"
            />
            <Input
              value={instagram}
              onChange={({ target }) => setInstagram(target.value)}
              placeholder="Instagram"
            />
          </InputGroup>
        </FormBlock>

        <FormBlock>
          <Title>Sou experiente em...</Title>

          <InputGroupTools>
            <Input
              list="learnedOptions"
              value={tempLearned}
              onChange={({ target }) => setTempLearned(target.value)}
              placeholder="Ex: Java"
            />
            <datalist id="learnedOptions">
              {techSugestions.map((sugestion) => (
                <option key={sugestion} value={sugestion} />
              ))}
            </datalist>
            <ButtonAdd
              type="button"
              onClick={handleAddLearnedItem}
              color="var(--quaternary)"
            >+</ButtonAdd>
          </InputGroupTools>

          <ToolsViewer>
            {learned && learned.map((tool) => (
              <Tool onClick={() => handleRemoveLearnedItem(tool)} key={tool} color="var(--quaternary)">
                #{tool} <span>x</span>
              </Tool>
            ))}
          </ToolsViewer>
        </FormBlock>

        <FormBlock>
          <Title>Quero aprender...</Title>

          <InputGroupTools>
            <Input
              list="toLearnOptions"
              value={tempToLearn}
              onChange={({ target }) => setTempToLearn(target.value)}
              placeholder="Ex: Portugol"
            />
            <datalist id="toLearnOptions">
              {techSugestions.map((sugestion) => (
                <option key={sugestion} value={sugestion} />
              ))}
            </datalist>
            <ButtonAdd type="button" onClick={handleAddToLearnItem} color="var(--quinary)">+</ButtonAdd>
          </InputGroupTools>

          <ToolsViewer>
            {toLearn && toLearn.map((tool) => (
              <Tool onClick={() => handleRemoveToLearnItem(tool)} key={tool} color="var(--quinary)">
                #{tool} <span>x</span>
              </Tool>
            ))}
          </ToolsViewer>
        </FormBlock>

        <ButtonSubmit type="submit" className="btnForm" >Tudo pronto</ButtonSubmit>

      </form>

      <Footer />
    </Container>
  )
}

export default DevForm
