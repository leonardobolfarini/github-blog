import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const IssuesContainer = styled.div`
  width: 100%;
  max-width: 864px;

  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

export const IssuesCard = styled(NavLink)`
  width: 100%;
  max-width: 412px;
  max-height: 260px;

  padding: 2rem;
  border-radius: 10px;

  background: ${(props) => props.theme['base-post']};
  color: inherit;
  text-decoration: inherit;

  cursor: pointer;

  > header {
    display: flex;
    align-items: first baseline;
    gap: 1rem;

    > h1 {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      flex: 1;
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  > p {
    margin-top: 1.25rem;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }
`
