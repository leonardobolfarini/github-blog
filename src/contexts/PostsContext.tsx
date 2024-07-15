import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface PostProps {
  title: string
  created_at: string
  body: string
  number: number
}

interface ApiProps {
  totalCount: number
  posts: PostProps[]
}

interface PostsContextProps {
  posts: ApiProps
  fetchPosts: (query?: string) => Promise<void>
}

interface PostContextProvider {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextProps)

export function PostsContextProvider({ children }: PostContextProvider) {
  const [posts, setPosts] = useState<ApiProps>({
    totalCount: 0,
    posts: [],
  })

  const fetchPosts = async (query?: string) => {
    const response = await axios.get(`https://api.github.com/search/issues`, {
      params: {
        q: `${query} repo:leonardobolfarini/github-blog`,
      },
    })

    const { totalCount, items } = response.data

    setPosts({
      totalCount,
      posts: items,
    })
  }

  useEffect(() => {
    fetchPosts(' ')
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
