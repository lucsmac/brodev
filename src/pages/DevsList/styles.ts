import styled from 'styled-components'

export const Container = styled.div`

  > header {
    padding-bottom: 75px;
  }

  > section {
    margin-top: -50px;
  }

  @media (min-width: 560px) {
    > header {
      padding-bottom: 120px;
    }

    > section {
      margin-top: -75px;
    }
  }
`

export const CardList = styled.section`
  padding: 2rem 2rem 3rem 2rem;

  @media (min-width: 760px) {
    padding: 2rem 4rem 4rem 4rem;
  }
`