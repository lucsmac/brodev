import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  padding-top: 65px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  box-shadow: rgba(0, 0, 0, .4) -3px 2px 10px;
  border-radius: 16px;
`

export const ProfileImg = styled.img`
  position: absolute;
  top: -52px;

  height: 105px;
  width: 105px;

  border: 5px solid var(--white);
  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, .4) -2px 3px 10px;
  display: block;
`

export const Name = styled.h1`
  font-family: Archivo;
  font-size: 1.5rem;
  font-weight: 500;
`

export const Localization = styled.h3`
  font-family: Archivo;
  font-size: 0.8rem;
  font-weight: 600;

  opacity: .5;
  
  padding-bottom: 1rem;
`

export const Bio = styled.p`
  max-width: 90%;

  font-family: Archivo;
  font-size: .9rem;
  
  opacity: .9;
`

export const Learned = styled.div`

`

export const ToLearn = styled.div`

`

export const ToolsTitle = styled.h3`
  margin-top: 1rem;
  font-family: Archivo;
  font-size: 1rem;
  color: ${props => props.color};
`

export const ToolsContent = styled.p`
  padding-top: .3rem;

  max-width: 90%;
  margin: 0 auto;

  font-family: Archivo;
  font-size: .8rem;
`

export const ContactIcons = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`

export const Icon = styled.span`
  margin: 1rem .1rem 0 .1rem;
  
  font-size: 2.5rem;

  color: var(--disabled);

  > a svg {
    transition: all .2s;
  }

  > a svg:hover {
    transform: scale(1.05);
  }

  > a .github {
    color: var(--dark);
  }

  > a .linkedin {
    color: #0077B5;
  }

  > a .instagram {
    color: #EC6B65;
  }
`
