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

export const Name = styled.div`
  font-family: Archivo;
  font-size: 1.5rem;
  font-weight: 500;
`

export const Localization = styled.div`
  font-family: Archivo;
  font-size: 0.8rem;
  font-weight: 600;

  opacity: .5;
  
  padding-bottom: 1rem;
`

export const Bio = styled.div`
  max-width: 90%;

  font-family: Archivo;
  font-size: .9rem;
  
  opacity: .9;
`

export const Learned = styled.div`

`

export const ToLearn = styled.div`

`

export const ToolsTitle = styled.div`

`

export const ToolsContent = styled.div`

`