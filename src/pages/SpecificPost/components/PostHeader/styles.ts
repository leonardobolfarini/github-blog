import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostHeaderContainer = styled.header`
  margin-top: -5.5rem;
  border-radius: 10px;
  width: 100%;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};

  > span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;

      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};

      text-decoration: none;
    }
  }

  > h1 {
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  > footer {
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-span']};

      > svg {
        color: ${(props) => props.theme['base-label']};
        width: 18px;
        height: 18px;
      }
    }
  }
`

export const BackToHome = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
`
