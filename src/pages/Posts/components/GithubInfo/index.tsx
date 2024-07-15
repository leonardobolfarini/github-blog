import axios from 'axios'
import { useEffect, useState } from 'react'
import { Avatar, Infos, InfosContainer, NameAndURL, Footer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface ProfileInfos {
  login: string
  avatar_url: string
  followers: number
  html_url: string
  bio: string
  company: string | null
  name: string
}

export function GithubInfo() {
  const [infos, setInfos] = useState<ProfileInfos>()

  const getInfos = async () => {
    const response = await axios.get(
      'https://api.github.com/users/leonardobolfarini',
    )

    const { login, avatar_url, company, followers, bio, html_url, name } =
      response.data

    setInfos({
      login,
      avatar_url,
      followers,
      company,
      bio,
      html_url,
      name,
    })
  }

  useEffect(() => {
    getInfos()
  }, [])

  return (
    <InfosContainer>
      <Avatar src={infos?.avatar_url} alt="" />
      <Infos>
        <NameAndURL>
          <p>{infos?.name}</p>
          <a href={infos?.html_url} target="_blank" rel="noreferrer">
            <footer>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </footer>
          </a>
        </NameAndURL>
        <p>{infos?.bio}</p>
        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>{infos?.login}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{infos?.company === null ? `Desempregado` : infos?.company}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{infos?.followers} seguidores</p>
          </span>
        </Footer>
      </Infos>
    </InfosContainer>
  )
}
