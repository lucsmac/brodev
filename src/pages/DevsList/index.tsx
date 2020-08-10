import React from 'react'

import { Container, CardList } from './styles'
import Header from '../../components/Header'
import SetHead from '../../components/SetHead'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import SliderCard from '../../components/Slider'

const profiles = [
  {
    id: 1,
    name: 'Lucas Macedo',
    avatar: 'https://avatars0.githubusercontent.com/u/55163413?s=460&u=4efcc2eba0c8f0ae229b2ea9c0ace6d18cb0a55f&v=4',
    uf: 'RN',
    city: 'Natal',
    bio: 'Me chamo Lucas (🇧🇷) e sou desenvolvedor web front-end. Criar soluções (encantadoras) através da engenharia sempre fez meus olhos brilharem 😍, isso contribuiu para que eu me especializasse em áreas como programação 😵 e UI/UX 😱.',
    github: 'https://github.com/lucsmac',
    linkedin: 'https://www.linkedin.com/in/lucsmac/',
    instagram: 'https://www.instagram.com/lucs_macedo/',
    learned: ['React', 'React Native', 'Vue', 'Next', 'HTML5', 'SEO', 'SCSS'],
    toLearn: ['Vue', 'Next', 'React', 'React Native']
  },
  {
    id: 2,
    name: 'Laura Beatris',
    avatar: 'https://avatars0.githubusercontent.com/u/48022589?s=460&u=6e0093b40a2ad5e8384ca214ee835859d03ebe2e&v=4',
    uf: 'RN',
    city: 'Natal',
    bio: 'front end engineer passionate about the react ecosystem | doing open source stuff | mentor at @Rocketseat 🚀',
    github: 'https://github.com/LauraBeatris',
    linkedin: '',
    instagram: '',
    learned: ['React', 'React Native', 'Vue', 'Next', 'HTML5', 'SEO', 'SCSS'],
    toLearn: ['Vue', 'Next', 'React', 'React Native']
  },
  {
    id: 3,
    name: 'Diego Fernandes',
    avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
    uf: 'RN',
    city: 'Natal',
    bio: "CTO at @Rocketseat. Passionate about education and changing people's lives through programming.",
    github: 'https://github.com/diego3g',
    linkedin: '',
    instagram: '',
    learned: ['React', 'React Native', 'Vue', 'Next', 'HTML5', 'SEO', 'SCSS'],
    toLearn: ['Vue', 'Next', 'React', 'React Native']
  },
  {
    id: 4,
    name: 'Mayk Brito',
    avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    uf: 'RN',
    city: 'Natal',
    bio: "An instructor focused on helping people start programming for web - #html #html #javascript #sql #react #nodejs #fullstack",
    github: 'https://github.com/diego3g',
    linkedin: '',
    instagram: '',
    learned: ['html', 'html', 'javascript', 'sql', 'react', 'nodejs'],
    toLearn: ['Vue', 'Next', 'React', 'React Native']
  },
  {
    id: 5,
    name: 'Lucas Montano',
    avatar: 'https://avatars2.githubusercontent.com/u/7559318?s=460&u=9b45fc98ab22e71efa4951eee14cf349a73411ec&v=4',
    uf: 'RN',
    city: 'Natal',
    bio: "Building great products & creating content",
    github: 'https://github.com/diego3g',
    linkedin: '',
    instagram: '',
    learned: ['React', 'React Native', 'Vue', 'Next', 'HTML5', 'SEO', 'SCSS'],
    toLearn: ['Vue', 'Next', 'React', 'React Native']
  },
  {
    id: 6,
    name: 'Mario Souto',
    avatar: 'https://avatars1.githubusercontent.com/u/13791385?s=460&u=6f629f0aa7530d62552d7b746fc106531588f638&v=4',
    uf: 'RN',
    city: 'Natal',
    bio: "My name is Mario Souto, and I'm from Brazil (🇧🇷). I've been working as Front-End Developer since 2015 (also have a past as Open Tibia Server owner). Actually I work as a Front End Engineer at Nubank and have my YouTube Channel where I make it as my personal lab, sharing many stuff there every week :)",
    github: 'https://github.com/omariosouto',
    linkedin: 'https://www.linkedin.com/in/omariosouto/',
    instagram: '',
    learned: ['React', 'React Native', 'Vue', 'Next', 'HTML5', 'SEO', 'SCSS'],
    toLearn: ['Vue', 'Next', 'React', 'React Native']
  },
]

const DevsList = () => {
  return (
    <Container>
      <SetHead title="Brodev | Lista de perfis" description="Encontre um brodev a partir da localização ou por interesses em comum" />

      <Header>Encontre um dev e entre em contato <span role="img" aria-label="hands">🤘</span></Header>

      <CardList>
        <SliderCard>
          {profiles && profiles.map((profile) => (
            <Card key={profile.id} {...profile} />
          ))}
        </SliderCard>
      </CardList>

      <Footer />
    </Container>
  )
}

export default DevsList
