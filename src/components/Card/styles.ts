import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 470px;
  padding: 1rem;
  padding-top: 65px;

  background: var(--white);

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  box-shadow: rgba(0, 0, 0, .4) -3px 2px 10px;
  border-radius: 28px;

  @media (min-width: 560px) {
    padding-top: 90px;

    border-radius: 56px;
  }
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

  @media (min-width: 560px) {
    height: 150px;
    width: 150px;

    top: -75px;
  }
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
  @media (min-width: 560px) {
    padding-bottom: 3rem;
  }
`

export const Bio = styled.p`
  max-width: 90%;

  font-family: Archivo;
  font-size: .9rem;
  
  opacity: .9;

  @media (min-width: 560px) {
    padding-bottom: .25rem;
  }
`

export const Learned = styled.div`
  width: 100%;
`

export const ToLearn = styled.div`
  width: 100%;
`

export const ToolsTitle = styled.h3`
  margin-top: 1rem;
  font-family: Archivo;
  font-size: 1rem;
  color: var(--dark);
`

export const ToolsContent = styled.ul`
  padding-top: .3rem;

  width: 100%;
  margin: 0 auto;

  font-family: Archivo;
  font-size: .8rem;

  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > li {
    display: inline-block;
    padding: .4rem 0.75rem;
    margin: .2rem;
    border-radius: 5px;
    
    white-space: nowrap;
    font-family: Archivo;
    color: var(--primary);
    font-weight: bold;
    
    background-color: ${(props) => props.color};
  }

  @media (min-width: 560px) {
    width: 90%;
  }
`

export const ContactIcons = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  @media (min-width: 560px) {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
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
