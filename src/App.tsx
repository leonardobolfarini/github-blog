import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { PostsContextProvider } from './contexts/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <PostsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsContextProvider>
    </ThemeProvider>
  )
}
