import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'styled-components'
import { IssueContent } from './styles'

interface PostBodyProps {
  body: string
}

export const PostBody = ({ body }: PostBodyProps) => {
  const colors = useTheme()
  return (
    <IssueContent>
      <Markdown
        className="line-break"
        children={body}
        components={{
          code({ children }) {
            return (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children)}
                style={{
                  ...oneDark,
                  'code[class*="language-"]': {
                    width: '100%',
                    ...oneDark['code[class*="language-"]'],
                    backgroundColor: colors['base-post'],
                    color: colors['base-text'],
                  },
                  'pre[class*="language-"]': {
                    ...oneDark['code[class*="language-"]'],
                    backgroundColor: colors['base-post'],
                    color: colors['base-text'],
                  },
                }}
              />
            )
          },
        }}
      />
    </IssueContent>
  )
}
