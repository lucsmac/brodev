import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);
`

export const Hero = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    display: block;
    width: 100%;
  }

  > h2 {
    max-width: 80%;
    
    opacity: 0.7;
    color: var(--white);

    font: 0.8rem Archivo;
    font-weight: 300;
    text-align: center;
    line-height: 1.1rem;

    margin-bottom: 3rem;
  }

  @media (min-width: 720px) {
    > h2 {
      font-size: 1rem;
    }

    > img {
      width: 480px;
    }
  }

  @media (min-width: 1100px) {
    > img {
      width: 600px;
    }
  }
`

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  > a + a {
    button {
      margin-top: 0.6rem;
      color: var(--tertiary);
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;

    > a + a {
      button {
        margin-top: 0;
      }
    }
  }
`