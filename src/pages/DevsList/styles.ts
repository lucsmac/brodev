import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: hidden;

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
      margin-top: -60px;
    }
  }
`

export const CardList = styled.section`
  padding: 2rem 1rem 3rem 1rem;

  @media (min-width: 760px) {
    padding: 2rem 4rem 4rem 4rem;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-slide {
    width: auto !important;
  }

  .slick-dots {
    bottom: -45px;
  }

  .slick-dots li button:before  {
    font-size: .5rem;
  }

  .slick-dots li.slick-active button:before {
    font-size: .8rem;
    color: var(--primary);
  }
`