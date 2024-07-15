import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchFormContainer } from './style'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchPosts } = useContext(PostsContext)

  async function handleFetchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleFetchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
