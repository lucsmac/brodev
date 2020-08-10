import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 1rem 1.5rem;

  background-color: var(--primary);

  @media (min-width: 960px) {
    padding: 1rem 3rem;
  }
`

export const TopWrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr;
  align-items: center;

  > a {
    grid-column: 3/4;
    justify-self: end;

    > svg {
      color: var(--white);
      font-size: 2rem;

      cursor: pointer;

      transition: opacity 0.2s;
      opacity: 0.6;

      &:hover { 
        opacity: 1;
      }
    }
  }
`

export const Logo = styled.img`
  grid-column: 2/3;

  justify-self: center;

  transition: opacity 0.2s;
  opacity: 0.9;

  &:hover { 
    opacity: 1;
  }
`

export const Title = styled.strong`
  display: flex;
  align-items: center;

  font-size: 1.75rem;
  line-height: 1.80rem;
  color: var(--tertiary);
  font-family: Archivo;

  display: block;

  max-width: 350px;
  margin-top: 3rem;
  margin-bottom: 1rem;

  > span {
    font-size: 1.4rem;
  }
  
  @media (min-width: 760px) {
    max-width: 400px;
    margin-left: 3.5rem;
  }

  @media (min-width: 960px) {
    max-width: 400px;
    margin-left: 7rem;
  }
`