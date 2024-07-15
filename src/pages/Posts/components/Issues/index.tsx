import { useContext } from 'react'
import { IssuesCard, IssuesContainer } from './styles'
import { PostsContext } from '../../../../contexts/PostsContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Issues() {
  const { posts } = useContext(PostsContext)

  return (
    <IssuesContainer>
      {posts.posts.map((post) => {
        return (
          <IssuesCard key={post.number} to={`/${post.number}`}>
            <header>
              <h1>{post.title}</h1>
              <span>
                {formatDistanceToNow(post.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </header>
            <p>{post.body}</p>
          </IssuesCard>
        )
      })}
    </IssuesContainer>
  )
}
