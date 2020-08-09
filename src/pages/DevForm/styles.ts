import styled from 'styled-components'

export const Container = styled.div`
  > form {
    padding: 1rem 0.75rem;
  }

  @media (min-width: 760px) {
    > form {
      max-width: 70%;
      margin: 0 auto;
    }
  }

  @media (min-width: 960px) {

    > form {
      max-width: 640px;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }
`

export const FormBlock = styled.fieldset`
`

export const Title = styled.legend`
  font-family: Archivo;
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: bold;
  margin-bottom: 1rem;
  padding-top: 1rem;
`

export const InputGroup = styled.div`
  & .inputsEndereco {
    display: grid;
    grid-template-columns: 60px 1fr;
    column-gap: 1rem;
  }
`
