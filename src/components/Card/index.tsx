import React from 'react'

import { CardContainer, ProfileImg, Name, Localization, Bio, Learned, ToLearn, ToolsTitle, ToolsContent, ContactIcons, Icon } from './styles'

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io'

const Card = () => {
  return (
    <CardContainer>
      <ProfileImg src="https://avatars0.githubusercontent.com/u/55163413?s=460&u=4efcc2eba0c8f0ae229b2ea9c0ace6d18cb0a55f&v=4" alt="Lucas Macedo" />
      <Name>Lucas Macedo</Name>
      <Localization>Natal - RN</Localization>
      <Bio>Me chamo Lucas (🇧🇷) e sou desenvolvedor web front-end. Criar soluções (encantadoras) através da engenharia sempre fez meus olhos brilharem 😍, isso contribuiu para que eu me especializasse em áreas como programação 😵 e UI/UX 😱.</Bio>

      <Learned>
        <ToolsTitle color="var(--secondary)">Sou experiente em:</ToolsTitle>
        <ToolsContent>#React #Vue #Nuxt #TypeScript #SCSS</ToolsContent>
      </Learned>

      <ToLearn>
        <ToolsTitle color="var(--tertiary)">Quero aprender</ToolsTitle>
        <ToolsContent>#MachineLearning #MotionGraphics #Pixijs #Angularjs</ToolsContent>
      </ToLearn>

      <ContactIcons>
        <Icon>
          <a href="#">
            <IoLogoGithub className="github" />
          </a>
        </Icon>
        <Icon>
          <a href="#">
            <IoLogoLinkedin className="linkedin" />
          </a>
        </Icon>
        <Icon>
          {/* <a href="#"> */}
          <IoLogoInstagram className="instagram" />
          {/* </a> */}
        </Icon>
      </ContactIcons>
    </CardContainer>
  )
}

export default Card
