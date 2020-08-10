import React from 'react'

import { CardContainer, ProfileImg, Name, Localization, Bio, Learned, ToLearn, ToolsTitle, ToolsContent, ContactIcons, Icon } from './styles'

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io'

interface ProfileProps {
  id: number,
  name: string,
  uf: string,
  city: string,
  avatar: string,
  bio: string,
  github: string,
  linkedin: string,
  instagram: string,
  learned: string[],
  toLearn: string[]
}

const Card: React.FC<ProfileProps> = ({ name, uf, city, avatar, bio, github, linkedin, instagram, learned, toLearn }) => {

  return (
    <CardContainer>
      <ProfileImg src={avatar} alt={name} />
      <Name>{name}</Name>
      <Localization>{city} - {uf}</Localization>
      <Bio>{bio}</Bio>

      <Learned>
        <ToolsTitle>Sou experiente em:</ToolsTitle>
        <ToolsContent color="var(--quaternary)">
          {learned && learned.map((learnedItem) => (
            <li key={learnedItem}>#{learnedItem}</li>
          ))}
        </ToolsContent>
      </Learned>

      <ToLearn>
        <ToolsTitle>Quero aprender</ToolsTitle>
        <ToolsContent color="var(--quinary)">
          {toLearn && toLearn.map((toLearnItem) => (
            <li key={toLearnItem}>#{toLearnItem}</li>
          ))}
        </ToolsContent>
      </ToLearn>

      <ContactIcons>
        <Icon>
          {github ? (
            <a href={github}>
              <IoLogoGithub className="github" />
            </a>
          ) :
            <IoLogoGithub className="github" />}
        </Icon>
        <Icon>
          {linkedin ? (
            <a href={linkedin}>
              <IoLogoLinkedin className="linkedin" />
            </a>
          ) :
            <IoLogoLinkedin className="linkedin" />}
        </Icon>
        <Icon>
          {instagram ? (
            <a href={instagram}>
              <IoLogoInstagram className="instagram" />
            </a>
          ) :
            <IoLogoInstagram className="instagram" />}
        </Icon>
      </ContactIcons>
    </CardContainer>
  )
}

export default Card
