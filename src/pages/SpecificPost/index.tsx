import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContainer } from './styles'
import { PostBody } from './components/PostBody'
import { PostHeader } from './components/PostHeader'

interface UserProps {
  login: string
}

interface PostProps {
  body: string
  comments: number
  created_at: string
  html_url: string
  title: string
  user: UserProps
}

export function SpecificPost() {
  const { postID } = useParams<{ postID: string }>()

  const [post, setPost] = useState<PostProps>({
    body: '',
    comments: 0,
    created_at: '',
    html_url: '',
    title: '',
    user: {
      login: '',
    },
  })

  const { body, comments, created_at, html_url, title, user } = post

  const api = axios.create({
    baseURL:
      'https://api.github.com/repos/leonardobolfarini/github-blog/issues',
  })

  const getPost = async (postID: string) => {
    const response = await api.get(`/${postID}`)
    const { body, comments, created_at, html_url, title, user } = response.data
    const { login } = user

    setPost({
      body,
      comments,
      created_at,
      html_url,
      title,
      user: {
        login,
      },
    })
  }

  useEffect(() => {
    if (postID) {
      getPost(postID)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postID])

  return (
    <PostContainer>
      <PostHeader
        comments={comments}
        created_at={created_at}
        html_url={html_url}
        title={title}
        user={user}
      />

      <PostBody body={body} />
    </PostContainer>
  )
}
