import styled from 'styled-components'

export const SearchFormHeader = styled.div`
  width: 864px;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;

  > h1 {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > footer {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
