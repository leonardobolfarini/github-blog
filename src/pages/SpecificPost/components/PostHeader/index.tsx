import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BackToHome, PostHeaderContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostHeaderProps {
  title: string
  html_url: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}

export function PostHeader({
  comments,
  created_at,
  html_url,
  title,
  user,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <span>
        <BackToHome to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </BackToHome>
        <a href={html_url} target="_blank" rel="noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </span>

      <h1>{title}</h1>

      <footer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {created_at.length > 0 &&
            formatDistanceToNow(created_at, {
              locale: ptBR,
              addSuffix: true,
            })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </span>
      </footer>
    </PostHeaderContainer>
  )
}
