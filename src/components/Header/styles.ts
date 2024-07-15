import styled from 'styled-components'
import Cover from '../../assets/Cover.svg'
export const HeaderContainer = styled.header`
  background-image: url(${Cover});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0 8.375rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
