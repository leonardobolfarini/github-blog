import { useContext } from 'react'
import { GithubInfo } from './components/GithubInfo'
import { Issues } from './components/Issues'
import { SearchForm } from './components/SearchForm'
import { SearchFormHeader } from './styles'
import { PostsContext } from '../../contexts/PostsContext'

export function Posts() {
  const { posts } = useContext(PostsContext)

  return (
    <main>
      <GithubInfo />

      <SearchFormHeader>
        <h1>Publicações</h1>
        <footer>{posts.total_count} publicações</footer>
      </SearchFormHeader>

      <SearchForm />

      <Issues />
    </main>
  )
}
