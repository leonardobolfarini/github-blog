import styled from 'styled-components'

export const InfosContainer = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2.5rem;
  width: 864px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 148px 1fr;
  grid-gap: 2rem;

  margin-top: -5.5rem;
  background: ${(props) => props.theme['base-profile']};
`

export const Avatar = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 8px;
`

export const Infos = styled.div`
  > p {
    margin-top: 0.5rem;
  }
`

export const NameAndURL = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;

  > p {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    align-self: flex-start;
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    font-weight: bold;
    font-size: 0.75rem;

    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
  }
`

export const Footer = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    svg {
      opacity: 0.5;
    }
  }
`
