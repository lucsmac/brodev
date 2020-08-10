import styled from 'styled-components'

export const Container = styled.div`
  > form {
    padding: 4rem 0.75rem;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > fieldset + fieldset {
      margin-top: 2rem;
    }

    .btnForm {
      border: none;
      margin-top: 4rem;
    }
  }

  @media (min-width: 760px) {
    > form {
      max-width: 70%;
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
  width: 100%;
`

export const Title = styled.legend`
  font-family: Archivo;
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: bold;
  margin-bottom: 1rem;
`

export const InputGroup = styled.div`
  & .inputsEndereco {
    display: grid;
    grid-template-columns: 60px 1fr;
    column-gap: 1rem;
  }

  > textarea, select {
    width: 100%;

    margin: .35rem 0;
    padding: .7rem .4rem;

    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    background-color: rgba(0, 0, 0, 0.03);

  }

  > textarea {
    resize: none;
    height: 10rem;
  }

  select {
    color: rgba(0, 0, 0, 0.6)
  }
`

export const InputGroupTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  label {
    flex: 1
  }
`

export const ButtonAdd = styled.button`
  width: 40px;
  height: 40px;

  margin-left: .7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-family: Archivo;
  color: var(--white);
  line-height: 2rem;

  border-radius: 8px;
  cursor: pointer;

  background-color: var(--primary);
`

export const ToolsViewer = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

export const Tool = styled.li`
  border-radius: 8px;

  background-color: ${(props) => props.color};

  padding: .5rem 1rem;
  color: var(--primary);

  font-size: .8rem;
  font-family: Archivo;

  display: flex;
  align-items: center;

  margin:.5rem .25rem 0 .25rem;

  font-weight: bold; 

  cursor: pointer;

  span {
    color: var(--secondary);
    
    display: inline-block;
    padding-left: .5rem;
  }
`

export const ButtonSubmit = styled.button`
  background-color: var(--primary);
  color: var(--white);

  padding: 18px 40px;
  width: 100%;
  border-radius: 8px; 
  
  font: 1rem Archivo;

  cursor: pointer;
`
