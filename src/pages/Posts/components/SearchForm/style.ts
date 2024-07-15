import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 0;

    margin-top: 0.75rem;

    width: 864px;
    border-radius: 6px;
    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 0;
    }
  }
`
